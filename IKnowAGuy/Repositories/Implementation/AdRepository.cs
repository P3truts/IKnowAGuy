using IKnowAGuy.Data;
using IKnowAGuy.Models;
using Microsoft.EntityFrameworkCore;

namespace IKnowAGuy.Repositories.Implementation
{
    public class AdRepository : IAdRepository
    {
        private readonly DatabaseContext _context;

        public AdRepository(DatabaseContext context)
        {
            _context = context;
        }
      
        public bool Add(Ad ad)
        {
            _context.Ads.Add(ad);
            return Save();
        }

        public Ad Get(long id) => _context.Ads.Include(a => a.Address).Include(a => a.JobCategory).Include(a => a.Service)
            .FirstOrDefault(a => a.Id == id);
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

        public IEnumerable<Ad> GetAll() => _context.Ads.Include(a => a.Address)
            .Include(a => a.JobCategory).Include(a => a.Service).ToList();
           

        public bool Remove(Ad ad)
        {
            _context.Remove(ad);
            return Save();
        }

        public bool Update(Ad ad)
        {
            _context.Ads.Update(ad);
            return Save();
        }

        private bool Save()
        {
            return _context.SaveChanges() > 0;
        }

        public IEnumerable<Ad> GetSearchedAds(string searched)
        {
            var query = _context.Ads.Where(ad => ad.Name.Contains(searched) || ad.Description.Contains(searched)).Include(a => a.Address)
            .Include(a => a.JobCategory).Include(a => a.Service);

            return query;
        }
    }
}
