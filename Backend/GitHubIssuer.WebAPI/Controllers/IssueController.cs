using Microsoft.AspNetCore.Mvc;
using Spiderly.Shared.Attributes;
using Spiderly.Shared.Interfaces;
using Azure.Storage.Blobs;
using Spiderly.Security.Services;
using GitHubIssuer.Business.Services;
using GitHubIssuer.Business.DTO;

namespace GitHubIssuer.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class IssueController : IssueBaseController
    {
        private readonly IApplicationDbContext _context;
        private readonly GitHubIssuerBusinessService _gitHubIssuerBusinessService;
        private readonly AuthenticationService _authenticationService;

        public IssueController(
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

    }
}