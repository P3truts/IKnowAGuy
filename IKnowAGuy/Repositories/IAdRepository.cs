using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories
{
    public interface IAdRepository: IRepository<BaseAd>
    {
        IEnumerable<BaseAd> GetAdsByJob(Job job);
        IEnumerable<BaseAd> GetAdsByService(Service service);
        IEnumerable<BaseAd> GetAdsByAddress(Address address);
    }
}
