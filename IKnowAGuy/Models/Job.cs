namespace IKnowAGuy.Models
{
    public class Job : Base
    {
        public int ServiceId { get; private set; }
        public Job(int id, string name, string description, int serviceId) : base(id, name, description)
        {
            ServiceId = serviceId;
        }
    }
}
