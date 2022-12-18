using IKnowAGuy.Models;
namespace IKnowAGuy.Services
{
    public interface IAdService
    {
        IEnumerable<Ad> GetAllAds();
        IEnumerable<Ad> GetAllPagedAds(string? role, int? pageSize, int? pageNum, string? county);
        Ad GetAdById(long id);
        bool UpdateAd(Ad ad);
        bool CreateAd(Ad ad);
        bool DeleteAd(Ad ad);
        IEnumerable<Ad> GetAdsByService(long serviceId);

        IEnumerable<Ad> GetAdsByJob(long jobId);

        IEnumerable<Ad> GetAdsByAddress(long addressId);

        IEnumerable<Ad> GetSearchedAds(string searchTerm, int? pageSize, int? pageNum);
    }
}
