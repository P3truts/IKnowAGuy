namespace IKnowAGuy.Models
{
    public class Ad : Base
    {
        public DateTime Date { get; private set; }
        public string? AddressId { get; private set; }
        public string? JobId { get; private set; }
        public string? ServiceId { get; private set; }
        public string? UserId { get; private set; }
        public string? RoleId { get; private set; }
    }
}
