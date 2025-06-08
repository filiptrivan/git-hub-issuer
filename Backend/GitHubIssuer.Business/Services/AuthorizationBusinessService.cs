using Azure.Storage.Blobs;
using Spiderly.Security.Services;
using Spiderly.Shared.Interfaces;
using Spiderly.Shared.Extensions;
using Spiderly.Shared.Exceptions;
using GitHubIssuer.Business.Entities;
using GitHubIssuer.Business.DTO;
using GitHubIssuer.Business.Enums;

namespace GitHubIssuer.Business.Services
{
    public class AuthorizationBusinessService : AuthorizationBusinessServiceGenerated
    {
        private readonly IApplicationDbContext _context;
        private readonly AuthenticationService _authenticationService;

        public AuthorizationBusinessService(
            IApplicationDbContext context, 
            AuthenticationService authenticationService
        )
            : base(context, authenticationService)
        {
            _context = context;
            _authenticationService = authenticationService;
        }

        #region UserExtended

        public override async Task AuthorizeUserExtendedReadAndThrow(long? userExtendedId)
        {
            await _context.WithTransactionAsync(async () =>
            {
                bool hasAdminReadPermission = await IsAuthorizedAsync<UserExtended>(BusinessPermissionCodes.ReadUserExtended);
                bool isCurrentUser = _authenticationService.GetCurrentUserId() == userExtendedId;

                if (isCurrentUser == false && hasAdminReadPermission == false)
                    throw new UnauthorizedException();
            });
        }

        public override async Task AuthorizeUserExtendedUpdateAndThrow(UserExtendedDTO userExtendedDTO)
        {
            await _context.WithTransactionAsync(async () =>
            {
                bool hasAdminUpdatePermission = await IsAuthorizedAsync<UserExtended>(BusinessPermissionCodes.UpdateUserExtended);
                if (hasAdminUpdatePermission)
                    return;

                long currentUserId = _authenticationService.GetCurrentUserId();
                if (currentUserId != userExtendedDTO.Id)
                    throw new UnauthorizedException();

                UserExtended userExtended = await GetInstanceAsync<UserExtended, long>(userExtendedDTO.Id, null);

                if (
                    userExtendedDTO.IsDisabled != userExtended.IsDisabled ||
                    userExtendedDTO.HasLoggedInWithExternalProvider != userExtended.HasLoggedInWithExternalProvider
                )
                {
                    throw new UnauthorizedException();
                }
            });
        }

        #endregion

    }
}
