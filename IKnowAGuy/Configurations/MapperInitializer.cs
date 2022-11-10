using AutoMapper;
using IKnowAGuy.Models;
using IKnowAGuy.ModelsDTO;

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
