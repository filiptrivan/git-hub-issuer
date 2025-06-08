using Microsoft.AspNetCore.Mvc;
using Spiderly.Security.Interfaces;
using Spiderly.Security.Services;
using Spiderly.Security.SecurityControllers;
using Spiderly.Shared.Interfaces;
using Spiderly.Shared.Attributes;
using Spiderly.Shared.DTO;
using Microsoft.EntityFrameworkCore;
using Spiderly.Shared.Resources;
using Spiderly.Security.DTO;
using Spiderly.Shared.Extensions;
using GitHubIssuer.Business.Entities;
using GitHubIssuer.Business.Services;
using GitHubIssuer.Business.DTO;

namespace GitHubIssuer.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class SecurityController : SecurityBaseController<UserExtended>
    {
        private readonly ILogger<SecurityController> _logger;
        private readonly SecurityBusinessService<UserExtended> _securityBusinessService;
        private readonly IApplicationDbContext _context;
        private readonly GitHubIssuerBusinessService _gitHubIssuerBusinessService;


        public SecurityController(
            ILogger<SecurityController> logger, 
            SecurityBusinessService<UserExtended> securityBusinessService, 
            IJwtAuthManager jwtAuthManagerService, 
            IApplicationDbContext context, 
            AuthenticationService authenticationService,
            AuthorizationService authorizationService,
            GitHubIssuerBusinessService gitHubIssuerBusinessService
        )
            : base(securityBusinessService, jwtAuthManagerService, context, authenticationService, authorizationService)
        {
            _logger = logger;
            _securityBusinessService = securityBusinessService;
            _context = context;
            _gitHubIssuerBusinessService = gitHubIssuerBusinessService;
        }

       

    }
}

