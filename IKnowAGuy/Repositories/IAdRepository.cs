using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories
{
    public interface IAdRepository: IRepository<Ad>
    {
        IEnumerable<Ad> GetAdsByJob(Job job);
        IEnumerable<Ad> GetAdsByService(Service service);
        IEnumerable<Ad> GetAdsByAddress(Address address);
    }
}
