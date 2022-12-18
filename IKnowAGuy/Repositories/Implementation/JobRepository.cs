using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories.Implementation
{
    public class JobRepository : IJobRepository
    {
        public bool Add(JobCategory item)
        {
            throw new NotImplementedException();
        }

        public JobCategory Get(long id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<JobCategory> GetAll()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<JobCategory> GetAllPaged(string? role, int? pageSize, int? pageNum, string? county)
        {
            throw new NotImplementedException();
        }

        public bool Remove(JobCategory jobCategory)
        {
            throw new NotImplementedException();
        }

        public bool Update(JobCategory item)
        {
            throw new NotImplementedException();
        }
    }
}
