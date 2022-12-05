using IKnowAGuy.Models;

namespace IKnowAGuy.Services
{
    public interface IAddressService
    {
        IEnumerable<Address> GetAllAddresses();

        Address GetAddressById(long id);

        bool CreateAddress(Address address);
    }
}
