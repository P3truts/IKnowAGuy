using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories.Implementation
{
    public class AdRepository : IAdRepository
    {
        public void Add(BaseAd item)
        {
            throw new NotImplementedException();
        }

        public BaseAd Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BaseAd> GetAdsByAddress(Address address)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BaseAd> GetAdsByJob(Job job)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BaseAd> GetAdsByService(Service service)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BaseAd> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }
    }
}
