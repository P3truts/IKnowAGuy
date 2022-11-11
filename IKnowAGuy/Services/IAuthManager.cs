using IKnowAGuy.ModelsDTO;
using System.IdentityModel.Tokens.Jwt;

namespace IKnowAGuy.Services
{
    public interface IAuthManager
    {
        Task<bool> ValidateUser(LoginUserDTO loginUser);
        Task<string> CreateToken();
        Task<JwtSecurityToken> Verify(string jwt);
    }
}
