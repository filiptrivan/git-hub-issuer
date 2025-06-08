using Spiderly.Shared.Attributes.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GitHubIssuer.Business.Entities
{
    public class IssueIssueLabel
    {
        [M2MMaintanceEntity(nameof(Issue.IssueLabels))]
        public virtual Issue Issue { get; set; }

        [M2MEntity(nameof(IssueLabel.Issues))]
        public virtual IssueLabel IssueLabel { get; set; }
    }
}
