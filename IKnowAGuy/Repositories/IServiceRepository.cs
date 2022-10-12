using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories
{
    public interface IServiceRepository : IRepository<Service>
    {
        bool Add(Service service);

        bool Update(long id, Service service);
    }
}
