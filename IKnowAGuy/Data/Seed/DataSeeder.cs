using IKnowAGuy.Models;

namespace IKnowAGuy.Data.Seed
{
    public class DataSeeder
    {
        private static DataSeeder? instance;

        private DataSeeder()
        {

        }

        public static DataSeeder GetInstance()
        {
            return instance ??= new DataSeeder();
        }

        public void SeedData(DatabaseContext db)
        {
            List<Base> ads = GetData();

            db.AddRange(ads);
            db.SaveChanges();
        }

        private List<Base> GetData()
        {
            List<Base> ads = new List<Base>();
            var jobCategory1 = new JobCategory
            {
                Name = "Category1",
                Description = "CategoryDescription"
            };
            var jobCategory2 = new JobCategory
            {
                Name = "Categor2",
                Description = "CategoryDescription"
            };

            var service1 = new Service()
            {
                Name = "Service1",
                Description = "ServiceDescription",
                JobCategoryId = jobCategory1.Id
            };


            var service2 = new Service()
            {
                Name = "Service2",
                Description = "ServiceDescription"
            };
            var ad = new Ad 
            {
                Name = "Add1",
                Description = "test",
                Date = DateTime.Now,

                Address = new Address
                {
                    City = "Bucuresti",
                    County = "Ilfov"
                },

                ServiceId = service1.Id,
                JobId = jobCategory1.Id,
            };
            
            ads.Add(ad);
            return ads;
        }
    }
}
