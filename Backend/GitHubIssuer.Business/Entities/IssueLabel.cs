using Spiderly.Shared.Attributes.EF;
using Spiderly.Shared.Attributes.EF.Translation;
using Spiderly.Shared.Attributes.EF.UI;
using Spiderly.Shared.BaseEntities;
using Spiderly.Shared.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GitHubIssuer.Business.Entities
{
    [TranslatePluralEn("Issue Labels")]
    [TranslateSingularEn("Issue Label")]
    [DoNotAuthorize]
    public class IssueLabel : BusinessObject<long>
    {
        [DisplayName]
        [StringLength(200, MinimumLength = 1)]
        [UIControlWidth("col-12")]
        [Required]
        public string Name { get; set; }

        [StringLength(1000, MinimumLength = 1)]
        [UIControlType(nameof(UIControlTypeCodes.TextArea))]
        public string Description { get; set; }

        public virtual List<Issue> Issues { get; } = new();
    }
}
