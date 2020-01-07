param(
    [Parameter(Mandatory)]
    [String]$appName = (Read-Host -Prompt "Enter the Application name"),
	[Parameter(Mandatory)]
    [String]$domainName = (Read-Host -Prompt "Enter your Customer Domain name")
)

#connect to graph
#Connect-Graph
$org = Get-Organization

#define exposed API and scope
$oauthPermission=@{};
$oauthPermission.Add("AdminConsentDescription","Allows Teams to call the app’s web APIs as the current user.");
$oauthPermission.Add("AdminConsentDisplayName","Teams can access the user's profile.");
$oauthPermission.Add("UserConsentDescription","Enable Teams to call this app's APIs with the same rights that you have");
$oauthPermission.Add("UserConsentDisplayName","Teams can access your user profile and make requests on your behalf");
$oauthPermission.Add("Id","d499cb02-507d-4d42-a93e-68d6c18879aa");
$oauthPermission.Add("IsEnabled",$true);
$oauthPermission.Add("Type", "User");
$oauthPermission.Add("Value", "access_as_user");

#generate RequiredResourceAccess attribute
$resourceAccessItems = @(
                        @{Id="b8bb2037-6e08-44ac-a4ea-4674e010e2a4";Type="Role"},
                        @{Id="ba47897c-39ec-4d83-8086-ee8256fa737d";Type="Scope"},
                        @{Id="14dad69e-099b-42c9-810b-d002981feec1";Type="Scope"},
                        @{Id="37f7f235-527c-4136-accd-4a02d197296e";Type="Scope"},
                        @{Id="ff74d97f-43af-4b68-9f2a-b77ee6968c5d";Type="Scope"},
                        @{Id="465a38f9-76ea-45b9-9f34-9e8b0d4b0b42";Type="Scope"},
                        @{Id="e383f46e-2787-4529-855e-0e479a3ffac0";Type="Scope"},
                        @{Id="4e46008b-f24c-477d-8fff-7bb4ec7aafe0";Type="Scope"},
                        @{Id="a154be20-db9c-4678-8ab7-66f6cc099a59";Type="Scope"},
                        @{Id="9d822255-d64d-4b7a-afdb-833b9a97ed02";Type="Scope"},
                        @{Id="615e26af-c38a-4150-ae3e-c3b0d4cb1d6a";Type="Scope"},
                        @{Id="64ac0503-b4fa-45d9-b544-71a463f05da0";Type="Scope"},
                        @{Id="b89f9189-71a5-4e70-b041-9887f0bc7e4a";Type="Scope"},
                        @{Id="64a6cdd6-aab1-4aaf-94b8-3cc8405e90d0";Type="Scope"},
                        @{Id="e1fe6dd8-ba31-4d61-89e7-88639da4683d";Type="Scope"},
                        @{Id="7427e0e9-2fba-42fe-b0c0-848c9e6a8182";Type="Scope"}
                        );
$resourceAccess = @{ResourceAppId="00000003-0000-0000-c000-000000000000"; ResourceAccess=$resourceAccessItems};

$newApp = New-Application -DisplayName $appName -RequiredResourceAccess $resourceAccess -SignInAudience "AzureADMultipleOrgs" -ApiOauth2PermissionScopes $oauthPermission

#Expose API to teams app
$preAuthorizedApplication1=@{AppId="5e3ce6c0-2b1f-4285-8d4b-75ee78787346";PermissionIds="d499cb02-507d-4d42-a93e-68d6c18879aa"};
$preAuthorizedApplication2=@{AppId="1fec8e78-bce4-4aaf-ab1b-5451cc387264";PermissionIds="d499cb02-507d-4d42-a93e-68d6c18879aa"};
$preAuthorizedApplications = @($preAuthorizedApplication1,$preAuthorizedApplication2);

$appIdentifierUri = Update-Application -ApplicationId $newApp.Id -ApiPreAuthorizedApplications $preAuthorizedApplications -IdentifierUris "api://$domainName/$($newApp.AppId)"

#Generate ClientId and ClientKey
$PasswordCredential = @{PasswordCredential=@{DisplayName="devKey"}}
$pwd = Add-ApplicationPassword -ApplicationId $newApp.Id -BodyParameter $PasswordCredential

$newApp = Get-Application -ApplicationId $newApp.Id

Write-Host "Tenant Id: $($org.Id)"
Write-Host "App IdentifierUri: $($newApp.IdentifierUris)"
Write-Host "Client Id: $($newApp.AppId)"
Write-Host "Client Secret: $($pwd.SecretText)"

#Consent manually