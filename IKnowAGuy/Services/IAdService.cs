using IKnowAGuy.Models;
namespace IKnowAGuy.Services
{
    public interface IAdService
    {
        IEnumerable<BaseAd> GetAllAds();

        BaseAd GetAdById(int id);

        IEnumerable<BaseAd> GetAdByService(Service service);

        IEnumerable<BaseAd> GetAdByJob(Job job);

        IEnumerable<BaseAd> GetAdByAddress(Address address);
    }
}
