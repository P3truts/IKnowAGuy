namespace IKnowAGuy.Models
{
    public class Service : Base
    {
        public long JobCategoryId { get; set; }
        public JobCategory JobCategory { get;  set; }
    }
}
