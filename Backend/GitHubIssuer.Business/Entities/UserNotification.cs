using Spiderly.Shared.Attributes.EF;

namespace GitHubIssuer.Business.Entities
{
    public class UserNotification 
    {
        [M2MMaintanceEntity(nameof(Notification.Recipients))]
        public virtual Notification Notification { get; set; }

        [M2MEntity(nameof(User.Notifications))]
        public virtual UserExtended User { get; set; }

        public bool IsMarkedAsRead { get; set; }
    }
}
