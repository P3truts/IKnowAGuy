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
      
        public bool Add(Ad ad, Address address, Service service, Job job)
        {
            ad.Address = address;
            ad.Service = service;
            ad.Service.Job = job;

            _context.Ads.Add(ad);
            return Save();
        }

        public Ad Get(long id) => _context.Ads.FirstOrDefault(a => a.Id == id);
        public IEnumerable<Ad> GetAdsByAddress(long addressId)
        {
            var querry = from ad in _context.Ads
                         where ad.Id == addressId
                         select ad;
            return querry;
        }

        public IEnumerable<Ad> GetAdsByJob(long jobId)
        {
            var querry = from ad in _context.Ads
                         where ad.Id == jobId
                         select ad;

            return querry;
        }

        public IEnumerable<Ad> GetAdsByService(long serviceId)
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

        public bool Update(Ad ad, Address address, Service service, Job job)
        {
            ad.Service = service;
            ad.Address = address;
            ad.Service.Job = job;

            _context.Ads.Update(ad);
            return Save();
        }

        private bool Save()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
