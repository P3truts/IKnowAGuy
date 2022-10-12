using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories
{
    public interface IAdRepository: IRepository<Ad>
    {
        bool Add(Ad ad, Address address, Service service, Job job);
        bool Update(Ad ad, Address address, Service service, Job job);
        IEnumerable<Ad> GetAdsByJob(long jobId);
        IEnumerable<Ad> GetAdsByService(long serviceId);
        IEnumerable<Ad> GetAdsByAddress(long addressId);
    }
}
