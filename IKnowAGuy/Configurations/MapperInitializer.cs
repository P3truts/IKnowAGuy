using AutoMapper;
using IKnowAGuy.Models;

namespace IKnowAGuy.Configurations
{
    public class MapperInitializer : Profile
    {
        public MapperInitializer()
        {
            CreateMap<AppUser, UserDTO>().ReverseMap();
        }
    }
}
