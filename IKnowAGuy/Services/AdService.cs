using IKnowAGuy.Models;
using IKnowAGuy.Repositories;
using IKnowAGuy.Repositories.Implementation;
using System.Linq;

namespace IKnowAGuy.Services
{
    public class AdService : IAdService
    {

        private readonly IAdRepository adRepository;

        public AdService(IAdRepository adRepository)
        {
            this.adRepository = adRepository;
        }

        public IEnumerable<Ad> GetAdsByAddress(string addressId) => adRepository.GetAdsByAddress(addressId);
        public Ad GetAdById(string id) => adRepository.Get(id);
        public IEnumerable<Ad> GetAdsByJob(string jobId) => adRepository.GetAdsByJob(jobId);
        public IEnumerable<Ad> GetAdsByService(string serviceId) => adRepository.GetAdsByService(serviceId);
        public IEnumerable<Ad> GetAllAds() => adRepository.GetAll();
    }
}
