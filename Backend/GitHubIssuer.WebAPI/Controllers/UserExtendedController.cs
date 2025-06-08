using Microsoft.AspNetCore.Mvc;
using Spiderly.Shared.Attributes;
using Spiderly.Shared.Interfaces;
using Azure.Storage.Blobs;
using Spiderly.Shared.DTO;
using Spiderly.Shared.Resources;
using Spiderly.Security.Services;
using GitHubIssuer.Business.Services;
using GitHubIssuer.Business.DTO;
using GitHubIssuer.Business.Entities;

namespace GitHubIssuer.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class UserExtendedController : UserExtendedBaseController
    {
        private readonly IApplicationDbContext _context;
        private readonly GitHubIssuerBusinessService _gitHubIssuerBusinessService;
        private readonly AuthenticationService _authenticationService;

        public UserExtendedController(
            IApplicationDbContext context, 
            GitHubIssuerBusinessService gitHubIssuerBusinessService, 
            AuthenticationService authenticationService
        )
            : base(context, gitHubIssuerBusinessService)
        {
            _context = context;
            _gitHubIssuerBusinessService = gitHubIssuerBusinessService;
            _authenticationService = authenticationService;
        }

        [HttpGet]
        [AuthGuard]
        [SkipSpinner]
        public async Task<UserExtendedDTO> GetCurrentUserExtended()
        {
            long userId = _authenticationService.GetCurrentUserId();
            return await _gitHubIssuerBusinessService.GetUserExtendedDTO(userId, false); // Don't need to authorize because he is current user
        }

    }
}

