using IKnowAGuy.Data;
using IKnowAGuy.Models;
using Microsoft.EntityFrameworkCore;
using System.Data;
using X.PagedList;

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

        public IEnumerable<Ad> GetAll() 
        {
            var ads = _context.Ads.Include(a => a.Address).Include(a => a.JobCategory).Include(a => a.Service)
                .ToList().OrderByDescending(a => a.Date);

            return ads;
        }
        public IEnumerable<Ad> GetAllPaged(string? role, int? pageSize, int? pageNum, string? county)
        {
            var ads = _context.Ads.Include(a => a.Address).Include(a => a.JobCategory).Include(a => a.Service)
                .ToList().OrderByDescending(a => a.Date);

            int pageDim = (pageSize ?? 3);
            int pageNumber = (pageNum ?? 1);

            if (role != null && county == null)
            {
                var filteredAds = ads.Where(ad => ad.UserRole == role);

                return filteredAds.ToPagedList(pageNumber, pageDim);
            } else if (county != null && role == null)
            {
                var filteredAds = ads.Where(ad => ad.Address.County == county);

                return filteredAds.ToPagedList(pageNumber, pageDim);
            } else if (role != null && county != null)
            {
                var filteredAds = ads.Where(ad => ad.UserRole == role && ad.Address.County == county);

                return filteredAds.ToPagedList(pageNumber, pageDim);
            }

            return ads.ToPagedList(pageNumber, pageDim);
        }

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

        public IEnumerable<Ad> GetSearchedAds(string searchTerm, int? pageSize, int? pageNum)
        {
            var resultAds = _context.Ads.Where(ad => ad.Name.Contains(searchTerm) || ad.Description.Contains(searchTerm) || 
                ad.JobCategory.Name.Contains(searchTerm) || ad.Service.Name.Contains(searchTerm)).Include(a => a.Address)
                    .Include(a => a.JobCategory).Include(a => a.Service);

            int pageDim = (pageSize ?? 3);
            int pageNumber = (pageNum ?? 1);

            return resultAds.ToPagedList(pageNumber, pageDim);
        }
    }
}
