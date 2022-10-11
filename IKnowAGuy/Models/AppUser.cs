using Microsoft.AspNetCore.Identity;

namespace IKnowAGuy.Models
{
    public class AppUser : IdentityUser
    {
        public long AdId { get; set; }
        public List<Job>? Jobs { get; set; }
        public List<Service>? Services { get; set; }
        public string? CompanyType { get; set; }
        public string? CompanyName { get; set; }
        public string? CompanyDescription { get; set; }
    }
}
