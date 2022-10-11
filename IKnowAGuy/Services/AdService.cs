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

        public IEnumerable<Ad> GetAdsByAddress(long addressId) => adRepository.GetAdsByAddress(addressId);
        public Ad GetAdById(long id) => adRepository.Get(id);
        public IEnumerable<Ad> GetAdsByJob(long jobId) => adRepository.GetAdsByJob(jobId);
        public IEnumerable<Ad> GetAdsByService(long serviceId) => adRepository.GetAdsByService(serviceId);
        public IEnumerable<Ad> GetAllAds() => adRepository.GetAll();
    }
}
