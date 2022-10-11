using IKnowAGuy.Data;
using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories.Implementation
{
    public class AdRepository : IAdRepository
    {
        private readonly DatabaseContext _context;

        public AdRepository(DatabaseContext context)
        {
            _context = context;
        }
        public void Add(Ad item)
        {
            throw new NotImplementedException();
        }

        public Ad Get(string id) => _context.Ads.FirstOrDefault(a => a.Id == id);
        public IEnumerable<Ad> GetAdsByAddress(string addressId)
        {
            var querry = from ad in _context.Ads
                         where ad.Id == addressId
                         select ad;

            return querry;
        }

        public IEnumerable<Ad> GetAdsByJob(string jobId)
        {
            var querry = from ad in _context.Ads
                         where ad.Id == jobId
                         select ad;
            return querry;
        }

        public IEnumerable<Ad> GetAdsByService(string serviceId)
        {
           var querry = from ad in _context.Ads
                        where ad.Id == serviceId
                        select ad;
            return querry;
        }

        public IEnumerable<Ad> GetAll() => _context.Ads.ToList();
           

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }
    }
}
