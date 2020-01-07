using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Collections;
using System.Diagnostics;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Xml;
using MeetingCaptureWebApp.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Primitives;
using Microsoft.Graph;
using Newtonsoft.Json;


namespace MeetingCaptureWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MVCGraphController : ControllerBase
    {
        private readonly IGraphSdkHelper _graphSdkHelper;

        public MVCGraphController(IGraphSdkHelper graphSdkHelper)
        {
            _graphSdkHelper = graphSdkHelper;
        }

        [HttpGet]
        [Route("{*all}")]
        public async Task<IActionResult> GetAsync(string all)
        {
            var message = await ProcessRequestAsync("GET", all, null).ConfigureAwait(false);

            return new HttpResponseMessageResult(message);
        }

        [HttpPost]
        [Route("{*all}")]
        public async Task<IActionResult> PostAsync(string all, [FromBody]object body)
        {
            var message = await ProcessRequestAsync("POST", all, body.ToString()).ConfigureAwait(false);

            return new HttpResponseMessageResult(message);
        }

        [HttpDelete]
        [Route("{*all}")]
        public async Task<IActionResult> DeleteAsync(string all)
        {
            var message = await ProcessRequestAsync("DELETE", all, null).ConfigureAwait(false);

            return new HttpResponseMessageResult(message);
        }

        [HttpPut]
        [Route("{*all}")]
        public async Task<IActionResult> PutAsync( string all, [FromBody]object body)
        {
            var message = await ProcessRequestAsync("PUT", all, body).ConfigureAwait(false);

            return new HttpResponseMessageResult(message);
        }

        [HttpPatch]
        [Route("{*all}")]
        public async Task<IActionResult> PatchAsync(string all, [FromBody]object body)
        {
            var message = await ProcessRequestAsync("PATCH", all, body.ToString(), HttpContext.Request.Headers).ConfigureAwait(false);

            return new HttpResponseMessageResult(message);
        }

        private async Task<HttpResponseMessage> ProcessRequestAsync(string method, string all, object content, IHeaderDictionary headers = null)
        {
            var graphClient = _graphSdkHelper.GetAuthenticatedClient();

            var request = new BaseRequest(GetURL(all, graphClient), graphClient, null)
            {
                Method = method,
                ContentType = HttpContext.Request.ContentType,
            };

            var neededHeaders = Request.Headers.Where(h => h.Key.ToLower() == "if-match").ToList();
            if (neededHeaders.Count() > 0)
            {
                foreach (var header in neededHeaders)
                {
                    request.Headers.Add(new HeaderOption(header.Key, string.Join(",", header.Value)));
                }
            }


            var contentType = "application/json";

            try
            {
                using (var response = await request.SendRequestAsync(content, CancellationToken.None, HttpCompletionOption.ResponseContentRead).ConfigureAwait(false))
                {
                    response.Content.Headers.TryGetValues("content-type", out var contentTypes);

                    contentType = contentTypes?.FirstOrDefault() ?? contentType;

                    var byteArrayContent = await response.Content.ReadAsByteArrayAsync().ConfigureAwait(false);
                    return ReturnHttpResponseMessage(HttpStatusCode.OK, contentType, new ByteArrayContent(byteArrayContent));
                }
            }
            catch (ServiceException ex)
            {
                return ReturnHttpResponseMessage(ex.StatusCode, contentType, new StringContent(ex.Error.ToString()));
            }
        }

        private static HttpResponseMessage ReturnHttpResponseMessage(HttpStatusCode httpStatusCode, string contentType, HttpContent httpContent)
        {
            var httpResponseMessage = new HttpResponseMessage(httpStatusCode)
            {
                Content = httpContent
            };
            try
            {
                httpResponseMessage.Content.Headers.ContentType = new MediaTypeHeaderValue(contentType);
            }
            catch
            {
                httpResponseMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            }
            

            return httpResponseMessage;
        }

        private string GetURL(string all, GraphServiceClient graphClient)
        {
            var urlStringBuilder = new StringBuilder();

            var qs = Request.Query;

            if (qs.Count > 0)
            {
                foreach (string key in qs.Keys)
                {
                    if (string.IsNullOrWhiteSpace(key)) continue;

                    StringValues values;
                    if (!qs.TryGetValue(key, out values)) continue;

                    foreach (string value in values)
                    {
                        urlStringBuilder.Append(urlStringBuilder.Length == 0 ? "?" : "&");
                        urlStringBuilder.AppendFormat("{0}={1}", Uri.EscapeDataString(key), Uri.EscapeDataString(value));
                    }
                }
                urlStringBuilder.Insert(0, "?");

            }
            urlStringBuilder.Insert(0, $"{GetBaseUrlWithoutVersion(graphClient)}/{all}");

            return urlStringBuilder.ToString();
        }

        private string GetBaseUrlWithoutVersion(GraphServiceClient graphClient)
        {
            var baseUrl = graphClient.BaseUrl;
            var index = baseUrl.LastIndexOf('/');
            return baseUrl.Substring(0, index);
        }
    }

    public class HttpResponseMessageResult : IActionResult
    {
        private readonly HttpResponseMessage _responseMessage;

        public HttpResponseMessageResult(HttpResponseMessage responseMessage)
        {
            _responseMessage = responseMessage; // could add throw if null
        }

        public async Task ExecuteResultAsync(ActionContext context)
        {
            context.HttpContext.Response.StatusCode = (int)_responseMessage.StatusCode;

            foreach (var header in _responseMessage.Content.Headers)
            {
                context.HttpContext.Response.Headers.TryAdd(header.Key, new StringValues(header.Value.ToArray()));
            }

            using (var stream = await _responseMessage.Content.ReadAsStreamAsync())
            {
                await stream.CopyToAsync(context.HttpContext.Response.Body);
                await context.HttpContext.Response.Body.FlushAsync();
            }
        }
    }
}