using IKnowAGuy.Models;
using IKnowAGuy.ModelsDTO;
using System.IdentityModel.Tokens.Jwt;

namespace IKnowAGuy.Services
{
    public interface IAuthManager
    {
        Task<(bool, string)> ValidateUser(LoginUserDTO loginUser);
        Task<string> CreateToken();
        Task<JwtSecurityToken> Verify(string jwt);
        Task<AppUser> GetUserAsync(string userName);
        Task<IEnumerable<string>> GetUserRolesAsync(AppUser user);
    }
}
