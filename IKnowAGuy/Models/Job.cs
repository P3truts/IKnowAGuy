namespace IKnowAGuy.Models
{
    public class Job : Base
    {
        public int JobId { get; private set; }
        public Job(int id, string name, string description, int jobId) : base(id, name, description)
        {
            JobId = jobId;
        }
    }
}
