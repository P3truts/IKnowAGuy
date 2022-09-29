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

        public IEnumerable<Ad> GetAdsByAddress(Address address) => adRepository.GetAdsByAddress(address);
        public Ad GetAdById(int id) => adRepository.Get(id);
        public IEnumerable<Ad> GetAdsByJob(Job job) => adRepository.GetAdsByJob(job);
        public IEnumerable<Ad> GetAdsByService(Service service) => adRepository.GetAdsByService(service);
        public IEnumerable<Ad> GetAllAds() => adRepository.GetAll();
    }
}
