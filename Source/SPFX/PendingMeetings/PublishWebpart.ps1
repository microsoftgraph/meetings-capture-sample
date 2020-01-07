param(
    [Parameter(Mandatory)]
    [String]$orgName,
	[Parameter(Mandatory)]
    [String]$adminUPN
)

$filePath = "./sharepoint/solution/pending-meetings.sppkg";

#Connect to Tenant site
write-host "Connecting to "https://$orgName.sharepoint.com"..." -Foreground "Green"
$userCredential = Get-Credential -UserName $adminUPN -Message "Type the password."
Connect-PnPOnline -Url https://$orgName.sharepoint.com -Credentials $userCredential

#Check if webpart is deployed
write-host "Checking if webpart is deployed already..." -Foreground "Green"
$app = Get-PnPApp|Where-Object {$_.Title -eq "pending-meetings-client-side-solution"}
if ($null -ne $app)
{
    Write-Host "Removing deployed webpart..." -Foreground "Green"
    Unpublish-PnPApp -Identity $app.Id
    Uninstall-PnPApp -Identity $app.Id
    Remove-PnPApp -Identity $app.Id
}

Write-Host "Deploying webpart..." -Foreground "Green"
$app = Add-PnPApp -Path $filePath -Publish -Overwrite
Write-Host "Syncing to Teams" -Foreground "Green"
Sync-PnPAppToTeams -Identity $app.Id

write-host "Complete!" -Foreground "Green"
