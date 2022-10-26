using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories
{
    public interface IAdRepository: IRepository<Ad>
    {
        IEnumerable<Ad> GetAdsByJob(long jobId);
        IEnumerable<Ad> GetAdsByService(long serviceId);
        IEnumerable<Ad> GetAdsByAddress(long addressId);
        IEnumerable<Ad> GetSearchedAds(string searched);
    }
}
