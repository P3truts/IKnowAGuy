using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories
{
    public interface IAdRepository: IRepository<Ad>
    {
        IEnumerable<Ad> GetAdsByJob(string jobId);
        IEnumerable<Ad> GetAdsByService(string serviceId);
        IEnumerable<Ad> GetAdsByAddress(string addressId);
    }
}
