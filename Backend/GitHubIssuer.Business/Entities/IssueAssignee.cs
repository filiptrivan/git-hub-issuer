using Spiderly.Shared.Attributes.EF;
using Spiderly.Shared.BaseEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GitHubIssuer.Business.Entities
{
    public class IssueAssignee
    {
        [M2MMaintanceEntity(nameof(Issue.Assignees))]
        public virtual Issue Issue { get; set; }

        [M2MEntity(nameof(Assignee.Issues))]
        public virtual UserExtended Assignee { get; set; }
    }
}
