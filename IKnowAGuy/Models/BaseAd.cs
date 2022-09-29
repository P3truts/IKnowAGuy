namespace IKnowAGuy.Models
{
    public abstract class BaseAd : Base
    {
        public DateTime Date { get; private set; }
        public string Address { get; private set; }
        public int JobId { get; private set; }
        public int ServiceId { get; private set; }
        protected BaseAd(int id, string name, string description, DateTime date, string address, int jobId, int serviceId) 
            : base(id, name, description)
        {
            JobId = jobId;
            ServiceId = serviceId;
            Address = address;
            Date = date;
        }
    }
}
