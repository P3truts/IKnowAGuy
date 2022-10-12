using IKnowAGuy.Data;
using IKnowAGuy.Models;
using Microsoft.EntityFrameworkCore;

namespace IKnowAGuy.Repositories.Implementation
{
    public class AddressRepository : IAddressRepository
    {
        private readonly DatabaseContext _context;

        public AddressRepository(DatabaseContext context)
        {
            _context = context;
        }
        public bool Add(Address item)
        {
            _context.Addresses.Add(item);
            return Save();
        }

        public Address Get(long id) => _context.Addresses.FirstOrDefault(a => a.AddressId == id);


        public IEnumerable<Address> GetAll() => _context.Addresses.ToList();

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }

        public bool Update(Address item)
        {
            throw new NotImplementedException();
        }

        private bool Save()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
