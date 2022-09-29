using IKnowAGuy.Repositories;

namespace IKnowAGuy.Services
{
    public interface IAdService
    {
        IEnumerable<Ad> GetAllAds();

        Ad GetAdById(int id);

        IEnumerable<Ad> GetAdByService(Service service);

        IEnumerable<Ad> GetAdByJob(Job job);

        IEnumerable<Ad> GetAdByAddress(Address address);
    }
}
