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

        public IEnumerable<BaseAd> GetAdsByAddress(Address address) => adRepository.GetAdsByAddress(address);
        public BaseAd GetAdById(int id) => adRepository.Get(id);
        public IEnumerable<BaseAd> GetAdsByJob(Job job) => adRepository.GetAdsByJob(job);
        public IEnumerable<BaseAd> GetAdsByService(Service service) => adRepository.GetAdsByService(service);
        public IEnumerable<BaseAd> GetAllAds() => adRepository.GetAll();
    }
}
