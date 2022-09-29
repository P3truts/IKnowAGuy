namespace IKnowAGuy.Models
{
    public class Service : Base
    {
        public int ServiceId { get; private set; }
        public Service(int id, string name, string description, int serviceId) : base(id, name, description)
        {
            ServiceId = serviceId;
        }
    }
}
