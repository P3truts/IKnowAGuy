using IKnowAGuy.Models;

namespace IKnowAGuy.Repositories
{
    public interface IAddressRepository : IRepository<Address>
    {
        bool Add(Address address);
        bool Update(long id, Address address);
    }
}
