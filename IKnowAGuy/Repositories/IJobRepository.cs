using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories
{
    public interface IJobRepository : IRepository<Job>
    {
        bool Add(Job job);  
        bool Update(long id, Job job);
    }
}
