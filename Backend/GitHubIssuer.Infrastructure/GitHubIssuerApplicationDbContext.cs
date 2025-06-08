using Microsoft.EntityFrameworkCore;
using GitHubIssuer.Business.Entities;
using Spiderly.Infrastructure;

namespace GitHubIssuer.Infrastructure
{
    public partial class GitHubIssuerApplicationDbContext : ApplicationDbContext<UserExtended> // https://stackoverflow.com/questions/41829229/how-do-i-implement-dbcontext-inheritance-for-multiple-databases-in-ef7-net-co
    {
        public GitHubIssuerApplicationDbContext(DbContextOptions<GitHubIssuerApplicationDbContext> options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            return await base.SaveChangesAsync(cancellationToken);
        }

    }
}
