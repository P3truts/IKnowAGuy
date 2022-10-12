using IKnowAGuy.Data;
using IKnowAGuy.Models;
using IKnowAGuy.Repositories;

namespace IKnowAGuy.Services.Implementation
{
    public class AddressService : IAddressService
    {
        private readonly IAddressRepository _repository;

        public AddressService(IAddressRepository repository)
        {
            _repository = repository;
        }
        public bool CreateAddress(Address address) => _repository.Add(address);
        public Address GetAddressById(long id) => _repository.Get(id);
        public IEnumerable<Address> GetAllAddresses() => _repository.GetAll();
    }
}
