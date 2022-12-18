﻿using IKnowAGuy.Data;
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

        public Address Get(long id) => _context.Addresses.FirstOrDefault(a => a.Id == id);

        public IEnumerable<Address> GetAll() => _context.Addresses.ToList();
        public IEnumerable<Address> GetAllPaged(string? role, int? pageSize, int? pageNum, string? county) => _context.Addresses.ToList();

        public bool Remove(Address address)
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
