namespace IKnowAGuy.Models
{
    public class Ad : Base
    {
        public DateTime Date { get; set; }
        public Address? Address { get; set; }
        public Service? Service { get; set; }
        public JobCategory? JobCategory { get; set; }
      /*  public long? AddressId { get; set; }
        public long? JobId { get; set; }
        public long? ServiceId { get; set; }*/
            
        public string UserId { get; set; }
        public string RoleId { get; set; }
    }
}
