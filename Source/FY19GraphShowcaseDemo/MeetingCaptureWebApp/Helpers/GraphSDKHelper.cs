using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Primitives;
using Microsoft.Graph;

namespace MeetingCaptureWebApp.Helpers
{
    public class GraphSdkHelper : IGraphSdkHelper
    {
        private readonly IGraphAuthProvider _authProvider;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMemoryCache _memoryCache;
        private GraphServiceClient _graphClient;

        public GraphSdkHelper(IGraphAuthProvider authProvider, IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache)
        {
            _authProvider = authProvider;
            _httpContextAccessor = httpContextAccessor;
            _memoryCache = memoryCache;
        }

        private string GetAssertion()
        {
            string returnValue = null;
            var httpContext = _httpContextAccessor.HttpContext;
            httpContext.Request.Headers.TryGetValue("Authorization", out StringValues assertion);

            if (assertion.Count == 0)
            {
                httpContext.Request.Query.TryGetValue("userObjectId", out StringValues userObjectIds);
                if (userObjectIds.Count > 0)
                {
                    returnValue = _memoryCache.Get<string>(userObjectIds.First());
                }
            }
            else
            {
                returnValue = assertion;
            }

            return returnValue;
        }

        private string GetAccessToken(string assertion)
        {
            string updatedAccessToken = AsyncUtil.RunSync(async () => await _authProvider.GetUserAccessTokenAsync(assertion));
            return _memoryCache.GetOrCreate(assertion, o => AsyncUtil.RunSync(async () => await _authProvider.GetUserAccessTokenAsync(assertion)));
        }
        // Get an authenticated Microsoft Graph Service client.
        public GraphServiceClient GetAuthenticatedClient()
        {
            var assertion = GetAssertion();

            return GetAuthenticatedClient(assertion);
        }

        public void UpdateAssertion(string userObjectId)
        {
            var assertion = GetAssertion();
            _memoryCache.Set<string>(userObjectId, assertion);
        }

        // Get an authenticated Microsoft Graph Service client.
        public GraphServiceClient GetAuthenticatedClient(string assertion)
        {
            _graphClient = new GraphServiceClient(new DelegateAuthenticationProvider(async requestMessage =>
            {
                requestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", GetAccessToken(assertion));
                await Task.CompletedTask;
            }));
            return _graphClient;
        }

        public GraphServiceClient GetDaemonAppClient()
        {
            string accessToken = AsyncUtil.RunSync(async () => await _authProvider.GetApplicationAccessTokenAsync());

            _graphClient = new GraphServiceClient(new DelegateAuthenticationProvider(async requestMessage =>
            {
                requestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                await Task.CompletedTask;
            }));

            return _graphClient;
        }

        public Task<string> GetDaemonAppAccessToken()
        {
            return _authProvider.GetApplicationAccessTokenAsync();
        }
    }
    public interface IGraphSdkHelper
    {
        GraphServiceClient GetAuthenticatedClient();
        GraphServiceClient GetAuthenticatedClient(string tuid);
        GraphServiceClient GetDaemonAppClient();
        Task<string> GetDaemonAppAccessToken();
        void UpdateAssertion(string userObjectId);
    }
}
