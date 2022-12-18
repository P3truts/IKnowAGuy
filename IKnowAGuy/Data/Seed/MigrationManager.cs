using Microsoft.EntityFrameworkCore;

namespace IKnowAGuy.Data.Seed
{
    public static class MigrationManager
    {
        public static IHost MigrateDatabase(this IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                using (var appContext = scope.ServiceProvider.GetRequiredService<DatabaseContext>())
                {
                    try
                    {
                        if (!appContext.Ads.Any())
                        {
                            DataSeeder.GetInstance().SeedData(appContext);
                        }
                        //appContext.Database.Migrate();
                    }
                    catch (Exception ex)
                    {
                        //Log errors or do anything you think it's needed
                        throw;
                    }
                }
            }
            return host;
        }
    }
}
