using IKnowAGuy.Models;
using System.ComponentModel.DataAnnotations;

namespace IKnowAGuy.ModelsDTO
{
    public class UserDTO
    {
        [Required, MaxLength(256)]
        public string Username { get; set; }
        [Required, MaxLength(256)]
        public string FirstName { get; set; }
        [Required, MaxLength(256)]
        public string LastName { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }

        [Required, DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password), Compare(nameof(Password))]
        public string ConfirmPassword { get; set; }
        public ICollection<string> Roles { get; set; }
        public List<JobCategory>? Jobs { get; set; }
        public List<Service>? Services { get; set; }
        public string? CompanyType { get; set; }
        public string? CompanyName { get; set; }
        public string? CompanyDescription { get; set; }
    }
}
