using Spiderly.Shared.Attributes.EF.UI;

namespace GitHubIssuer.Business.DTO
{
    public partial class NotificationDTO
    {
        /// <summary>
        /// This property is only for currently logged in user
        /// </summary>
        [UIDoNotGenerate]
        public bool? IsMarkedAsRead { get; set; }
    }
}
