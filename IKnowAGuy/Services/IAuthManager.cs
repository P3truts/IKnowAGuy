using IKnowAGuy.ModelsDTO;

namespace IKnowAGuy.Services
{
    public interface IAuthManager
    {
        Task<bool> ValidateUser(LoginUserDTO loginUser);
        Task<string> CreateToken();
    }
}
