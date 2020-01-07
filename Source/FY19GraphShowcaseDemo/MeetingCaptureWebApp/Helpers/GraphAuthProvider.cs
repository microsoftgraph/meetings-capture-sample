using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Identity.Client;
using Microsoft.Graph;
using MeetingCaptureWebApp.Extensions;

namespace MeetingCaptureWebApp.Helpers
{
    public class GraphAuthProvider : IGraphAuthProvider
    {
        private IConfidentialClientApplication _oboApp;
        private IConfidentialClientApplication _deamonApp;
        private readonly string[] _scopes;

        public GraphAuthProvider(IConfiguration configuration)
        {
            var azureOptions = new AzureAdOptions();
            configuration.Bind("AzureAd", azureOptions);

            // More info about MSAL Client Applications: https://github.com/AzureAD/microsoft-authentication-library-for-dotnet/wiki/Client-Applications
            _oboApp = ConfidentialClientApplicationBuilder.Create(azureOptions.ClientId)
                    .WithClientSecret(azureOptions.ClientSecret)
                    .WithAuthority(AzureCloudInstance.AzurePublic, AadAuthorityAudience.AzureAdAndPersonalMicrosoftAccount)
                    .WithRedirectUri(azureOptions.BaseUrl + azureOptions.CallbackPath)
                    .Build();

            Authority = _oboApp.Authority;

            _scopes = azureOptions.GraphScopes.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);

            _deamonApp = ConfidentialClientApplicationBuilder.Create(azureOptions.ClientId)
                .WithClientSecret(azureOptions.ClientSecret)
                .WithAuthority($"https://login.microsoftonline.com/{azureOptions.TenantId}")
                .Build();
        }

        public string Authority { get; }

        public async Task<string> GetUserAccessTokenAsync(string jwtBearerToken)
        {
            var account = await _oboApp.AcquireTokenOnBehalfOf(_scopes, new UserAssertion(jwtBearerToken)).ExecuteAsync();
            if (account == null) throw new ServiceException(new Error
            {
                Code = "TokenNotFound",
                Message = "Unable to retrieve the access token from assertion"
            });

            return account.AccessToken;
        }

        public async Task<string> GetApplicationAccessTokenAsync()
        {
            string[] scopes = new string[] { "https://graph.microsoft.com/.default" };

            AuthenticationResult result = null;
            result = await _deamonApp.AcquireTokenForClient(scopes)
                                 .ExecuteAsync();

            return result.AccessToken;
        }
    }

    public interface IGraphAuthProvider
    {
        string Authority { get; }

        Task<string> GetUserAccessTokenAsync(string jwtBearerToken);

        Task<string> GetApplicationAccessTokenAsync();
    }
}
