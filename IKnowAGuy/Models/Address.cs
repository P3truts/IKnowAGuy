namespace IKnowAGuy.Models
{
    public class Address
    {
        public int AddressId { get; private set; }
        public string County { get; private set; }
        public string City { get; private set; }

        public Address(int addressId, string county, string city)
        {
            AddressId = addressId;
            County = county;
            City = city;
        }
    }
}
