using IKnowAGuy.Models;
namespace IKnowAGuy.Services
{
    public interface IAdService
    {
        IEnumerable<Ad> GetAllAds();

        Ad GetAdById(int id);

        IEnumerable<Ad> GetAdsByService(Service service);

        IEnumerable<Ad> GetAdsByJob(Job job);

        IEnumerable<Ad> GetAdsByAddress(Address address);
    }
}
