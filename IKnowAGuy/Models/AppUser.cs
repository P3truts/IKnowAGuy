using Microsoft.AspNetCore.Identity;

namespace IKnowAGuy.Models
{
    public class AppUser : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public List<Ad>? Ads { get; set; }
        public List<JobCategory>? Jobs { get; set; }
        public List<Service>? Services { get; set; }
        public string? CompanyType { get; set; }
        public string? CompanyName { get; set; }
        public string? CompanyDescription { get; set; }
    }
}
