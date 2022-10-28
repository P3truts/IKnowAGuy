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
                Name = "Piping",
                Description = "CategoryDescription"
            };
            var jobCategory2 = new JobCategory
            {
                Name = "Electrics",
                Description = "CategoryDescription"
            }; 

            var jobCategory3 = new JobCategory
            {
                Name = "Carpentry",
                Description = "CategoryDescription"
            };

            var service1 = new Service()
            {
                Name = "Pipe repairs",
                Description = "ServiceDescription",
            };


            var service2 = new Service()
            {
                Name = "Electric installation",
                Description = "ServiceDescription"
            }; 
            
            var service3 = new Service()
            {
                Name = "General repairs",
                Description = "ServiceDescription"
            };
            var ad = new Ad
            {
                Name = "Broken Shower",
                Description = "The shower faucet needs replaced",
                Date = DateTime.Now,

                Address = new Address
                {
                    City = "Bucuresti",
                    County = "Ilfov"
                },

                Service = service1,
                JobCategory = jobCategory1,
                RoleId = "123",
                UserId = "1234"
            }; 
            var ad2 = new Ad
            {
                Name = "Electrician needed",
                Description = " An experienced electrician is needed. Details later",
                Date = DateTime.Now,

                Address = new Address
                {
                    City = "Bucuresti",
                    County = "Ilfov"
                },

                Service = service2,
                JobCategory = jobCategory2,
                RoleId = "123asdf",
                UserId = "1234asdfasd"
            };
            var ad3 = new Ad
            {
                Name = "Floorboard repair",
                Description = "A skilled craftman needed to repair an antique floorboard",
                Date = DateTime.Now,

                Address = new Address
                {
                    City = "Bucuresti",
                    County = "Ilfov"
                },

                Service = service3,
                JobCategory = jobCategory3,
                RoleId = "123asdf",
                UserId = "1234asdfasd"
            }; 
            var ad4 = new Ad
            {
                Name = "Pipe fixing",
                Description = "I need someone to fix some broken pipes",
                Date = DateTime.Now,

                Address = new Address
                {
                    City = "Bucuresti",
                    County = "Ilfov"
                },

                Service = service1,
                JobCategory = jobCategory1,
                RoleId = "123asdf",
                UserId = "1234asdfasd"
            };

            ads.Add(ad4);
            ads.Add(ad2);
            ads.Add(ad3);
            ads.Add(ad);
            return ads;
        }
    }
}
