using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories.Implementation
{
    public class ServiceRepository : IServiceRepository
    {
        public bool Add(Service item)
        {
            throw new NotImplementedException();
        }

        public Service Get(long id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Service> GetAll()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Service> GetAllPaged(string? role, int? pageSize, int? pageNum)
        {
            throw new NotImplementedException();
        }

        public bool Remove(Service service)
        {
            throw new NotImplementedException();
        }

        public bool Update(Service item)
        {
            throw new NotImplementedException();
        }
    }
}
