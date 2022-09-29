namespace IKnowAGuy.Models
{
    public abstract class BaseAd : Base
    {
        public DateTime Date { get; private set; }
        public int AddressId { get; private set; }
        public int JobId { get; private set; }
        public int ServiceId { get; private set; }
        protected BaseAd(int id, string name, string description, DateTime date, int addressId, int jobId, int serviceId) 
            : base(id, name, description)
        {
            JobId = jobId;
            ServiceId = serviceId;
            AddressId = addressId;
            Date = date;
        }
    }
}
