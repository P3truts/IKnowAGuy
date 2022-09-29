using IKnowAGuy.Models;
namespace IKnowAGuy.Services
{
    public interface IAdService
    {
        IEnumerable<BaseAd> GetAllAds();

        BaseAd GetAdById(int id);

        IEnumerable<BaseAd> GetAdsByService(Service service);

        IEnumerable<BaseAd> GetAdsByJob(Job job);

        IEnumerable<BaseAd> GetAdsByAddress(Address address);
    }
}
