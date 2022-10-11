using IKnowAGuy.Models;
namespace IKnowAGuy.Services
{
    public interface IAdService
    {
        IEnumerable<Ad> GetAllAds();

        Ad GetAdById(string id);

        IEnumerable<Ad> GetAdsByService(string serviceId);

        IEnumerable<Ad> GetAdsByJob(string jobId);

        IEnumerable<Ad> GetAdsByAddress(string addressId);
    }
}
