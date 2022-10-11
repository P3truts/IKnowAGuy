using IKnowAGuy.Models;

namespace IKnowAGuy.Data.Seed
{
    public class DataSeeder
    {
        private static DataSeeder? instance;

        public DataSeeder()
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


               

                Service = new Service
                {
                    Name = "Pipe repair service",
                    Description = "Service description",
                     Job = new Job
                     {
                         Name = "new Job",
                         Description = "Job Description",
                     },
                },               
               
            };
            
            ads.Add(ad);
            return ads;
        }
    }
}
