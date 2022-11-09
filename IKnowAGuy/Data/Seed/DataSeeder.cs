using IKnowAGuy.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

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
            List<Base> ads = (List<Base>)GetData()[0];
            List<AppUser> users = (List<AppUser>)GetData()[1];
            List<IdentityRole> roles = (List<IdentityRole>)GetData()[2];

            db.AddRange(roles);
            db.AddRange(users);
            db.AddRange(ads);
            db.SaveChanges();
        }

        private List<object> GetData()
        {
            var modelBuilder = new ModelBuilder();

            List<Base> ads = new List<Base>();
            List<AppUser> users = new List<AppUser>();
            List<IdentityRole> roles = new List<IdentityRole>();
            // Jobs
            var jobCategory1 = new JobCategory
            {
                Name = "Piping",
                Description = "Everything related to pipes"
            };
            var jobCategory2 = new JobCategory
            {
                Name = "Electrics",
                Description = "Wiring and electronics"
            }; 
            var jobCategory3 = new JobCategory
            {
                Name = "Carpentry",
                Description = "Wood and semi-fabrics related work"
            };
            // Services
            var service1 = new Service()
            {
                Name = "Pipe repairs",
                Description = "Piping repairs exclusively",
            };
            var service2 = new Service()
            {
                Name = "Electric installation",
                Description = "Wiring work for lights, plugs or other electronics"
            };            
            var service3 = new Service()
            {
                Name = "General repairs",
                Description = "Small repairs around the house, as needed"
            };
            // Roles
            var role1 = new IdentityRole
            {
                Name = "Client",
                NormalizedName = "CLIENT"
            };
            var role2 = new IdentityRole
            {
                Name = "Handyman",
                NormalizedName = "HANDYMAN"
            };
            var role3 = new IdentityRole
            {
                Name = "Admin",
                NormalizedName = "ADMIN"
            };
            // Users
            var hasher = new PasswordHasher<IdentityUser>();
            var user1 = new AppUser
            {
                UserName = "Client1",
                Email = "client1@IKnowAGuy.com",
                PasswordHash = hasher.HashPassword(null, "P@ssword11"),
            };
            var user2 = new AppUser
            {
                UserName = "Handyman1",
                Email = "handyman1@IKnowAGuy.com",
                PasswordHash = hasher.HashPassword(null, "P@ssword12"),
            };
            var user3 = new AppUser
            {
                UserName = "Admin1",
                Email = "admin1@IKnowAGuy.com",
                PasswordHash = hasher.HashPassword(null, "P@ssword13"),
            };
            // Ads
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
                RoleId = role1.Id,
                UserId = user1.Id
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
                RoleId = role2.Id,
                UserId = user2.Id
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
                RoleId = role3.Id,
                UserId = user3.Id
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
                RoleId = role1.Id,
                UserId = user1.Id
            };

            roles.Add(role1);
            roles.Add(role2);
            roles.Add(role3);

            users.Add(user1);
            users.Add(user2);
            users.Add(user3);

            ads.Add(ad4);
            ads.Add(ad2);
            ads.Add(ad3);
            ads.Add(ad);

            var returned = new List<object>();
            returned.Add(ads);
            returned.Add(users);
            returned.Add(roles);
            return returned;
        }
    }
}
