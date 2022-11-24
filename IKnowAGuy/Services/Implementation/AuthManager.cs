using IKnowAGuy.Models;
using IKnowAGuy.ModelsDTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace IKnowAGuy.Services.Implementation
{
    public class AuthManager : IAuthManager
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IConfiguration _configuration;
        private AppUser _user;

        public AuthManager(UserManager<AppUser> userManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
        }

        public async Task<string> CreateToken()
        {
            var signinCredentials = GetSigningCredentials();
            var claims = await GetClaims();
            var token = GenerateTokenOptions(signinCredentials, claims);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private JwtSecurityToken GenerateTokenOptions(SigningCredentials signinCredentials, List<Claim> claims)
        {
            var jwtSettings = _configuration.GetSection("Jwt");
            var expiration = DateTime.Now.AddMinutes(Convert.ToDouble(jwtSettings.GetSection("lifetime").Value));

            var token = new JwtSecurityToken
            (
                issuer: jwtSettings.GetSection("Issuer").Value,
                claims: claims,
                expires: expiration,
                signingCredentials: signinCredentials,
                audience: "IKnowAGuy"
            );

            return token;
        }

        private async Task<List<Claim>> GetClaims()
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, _user.UserName)
            };

            var roles = await _userManager.GetRolesAsync(_user);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            return claims;
        }

        private SigningCredentials GetSigningCredentials()
        {
            //var key = Environment.GetEnvironmentVariable("KEY", EnvironmentVariableTarget.Machine);
            var key = "asldfhaw9poe78rtyqp3298tuq098utq0pw4jtpq02urtaslkdfhalsiufhap0opo2u";
            var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));

            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
        }

        public async Task<(bool, string)> ValidateUser(LoginUserDTO loginUser)
        {
            _user = await _userManager.FindByEmailAsync(loginUser.Email);
            return ((_user != null && await _userManager.CheckPasswordAsync(_user, loginUser.Password)), (_user != null ? _user.UserName : ""));

        }

        public async Task<JwtSecurityToken> Verify(string jwt)
        {
            var jwtSettings = _configuration.GetSection("Jwt");
            var tokenHandler = new JwtSecurityTokenHandler();
            /*var key = Environment.GetEnvironmentVariable("KEY", EnvironmentVariableTarget.Machine);*/
            var key = "asldfhaw9poe78rtyqp3298tuq098utq0pw4jtpq02urtaslkdfhalsiufhap0opo2u";
            tokenHandler.ValidateToken(jwt, new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = jwtSettings.GetSection("Issuer").Value,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)),
                ValidateAudience = false
            }, out SecurityToken validatedToken);

            return (JwtSecurityToken)validatedToken;
        }

        public async Task<AppUser> GetUserAsync(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);
            return user;
        }

        public async Task<IEnumerable<string>> GetUserRolesAsync(AppUser user)
        {
            var userRoles = await _userManager.GetRolesAsync(user);
            return userRoles;
        }


    }
}
