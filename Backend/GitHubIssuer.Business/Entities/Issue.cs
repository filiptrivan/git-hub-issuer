using Spiderly.Shared.Attributes.EF;
using GitHubIssuer.Business.DTO;
using Spiderly.Shared.Attributes.EF.UI;
using Spiderly.Shared.BaseEntities;
using Spiderly.Shared.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spiderly.Shared.Attributes.EF.Translation;

namespace GitHubIssuer.Business.Entities
{
    [DoNotAuthorize]
    public class Issue : BusinessObject<long>
    {
        [UIControlWidth("col-12")]
        [DisplayName]
        [StringLength(200, MinimumLength = 1)]
        [Required]
        public string Title { get; set; }

        [UIControlType(nameof(UIControlTypeCodes.TextArea))]
        [StringLength(1000, MinimumLength = 1)]
        public string Description { get; set; }

        [UIControlWidth("col-12")]
        [Required]
        [StringLength(200, MinimumLength = 1)]
        public string Link { get; set; }

        [TranslateSingularEn("Is Open")]
        public bool IsOpen { get; set; }

        [TranslateSingularEn("Issue Labels")]
        [UIControlType(nameof(UIControlTypeCodes.MultiSelect))]
        [GenerateCommaSeparatedDisplayName]
        public virtual List<IssueLabel> IssueLabels { get; } = new(); // M2M

        #region UITableColumn
        [UITableColumn(nameof(UserExtendedDTO.Email))]
        #endregion
        [SimpleManyToManyTableLazyLoad]
        public virtual List<UserExtended> Assignees { get; } = new(); // M2M
    }
}
