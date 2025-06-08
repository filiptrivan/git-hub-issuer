using LightInject;
using Spiderly.Security.Interfaces;
using Spiderly.Shared.Excel;
using Spiderly.Security.Services;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using Spiderly.Shared.Emailing;
using GitHubIssuer.Business.Services;
using GitHubIssuer.Business.Entities;
using GitHubIssuer.Shared.FluentValidation;
using Spiderly.Shared.Interfaces;
using Spiderly.Shared.Services;

namespace GitHubIssuer.WebAPI.DI
{
    public class CompositionRoot : ICompositionRoot
    {
        public virtual void Compose(IServiceRegistry registry)
        {
            #region Spiderly

            registry.Register<AuthenticationService>();
            registry.Register<AuthorizationService>();
            registry.Register<SecurityBusinessService<UserExtended>>();
            registry.Register<Spiderly.Security.Services.BusinessServiceGenerated<UserExtended>>();
            registry.Register<Spiderly.Security.Services.AuthorizationBusinessService<UserExtended>>();
            registry.Register<Spiderly.Security.Services.AuthorizationBusinessServiceGenerated<UserExtended>>();
            registry.Register<ExcelService>();
            registry.Register<EmailingService>();
            registry.Register<IFileManager, DiskStorageService>();
            registry.RegisterSingleton<IConfigureOptions<MvcOptions>, TranslatePropertiesConfiguration>();
            registry.RegisterSingleton<IJwtAuthManager, JwtAuthManagerService>();

            #endregion

            #region Business

            registry.Register<GitHubIssuer.Business.Services.GitHubIssuerBusinessService>();
            registry.Register<GitHubIssuer.Business.Services.BusinessServiceGenerated>();
            registry.Register<GitHubIssuer.Business.Services.AuthorizationBusinessService>();
            registry.Register<GitHubIssuer.Business.Services.AuthorizationBusinessServiceGenerated>();

            #endregion
        }
    }
}
