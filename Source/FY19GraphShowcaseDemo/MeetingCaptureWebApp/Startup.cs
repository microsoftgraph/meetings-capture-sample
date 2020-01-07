
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

using MeetingCaptureWebApp.Extensions;
using MeetingCaptureWebApp.Helpers;
using MeetingCaptureWebApp.Data;
using MeetingCaptureWebApp.Services;
using System;

namespace MeetingCaptureWebApp
{
    public class Startup
    {
        public const string ObjectIdentifierType = "http://schemas.microsoft.com/identity/claims/objectidentifier";
        public const string TenantIdType = "http://schemas.microsoft.com/identity/claims/tenantid";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMemoryCache();

            services.AddSingleton<IGraphAuthProvider, GraphAuthProvider>();
            services.AddTransient<IGraphSdkHelper, GraphSdkHelper>();
            services.AddTransient<ICalendarService, CalendarService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IFileService, FileService>();
            services.AddTransient<IMeetingService, MeetingService>();
            services.AddTransient<IMeetingDBService, MeetingDBService>();
            services.AddTransient<IPlanTaskService, PlanTaskService>();
            services.AddTransient<INotesService, NotesService>();
            services.AddTransient<ICommunicationService, CommunicationService>();
            services.AddScoped<IViewRenderService, ViewRenderService>();
            services.AddHttpContextAccessor();

            services.AddControllersWithViews();

            services.AddRazorPages();
            services.AddDbContext<ShowCaseDbContext>(item => item.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=MeetingCapture}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });
        }
    }
}
