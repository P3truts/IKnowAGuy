using AutoMapper;
using IKnowAGuy.Models;
using IKnowAGuy.ModelsDTO;
using IKnowAGuy.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IKnowAGuy.Controllers
{
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ILogger<AccountController> _logger;
        private readonly IMapper _mapper;
        private readonly IAuthManager _authManager;

        public AccountController(UserManager<AppUser> userManager, ILogger<AccountController> logger, IMapper mapper, 
            IAuthManager authManager)
        {
            _userManager = userManager;
            _authManager = authManager;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpPost("register")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Register([FromBody] UserDTO registrationUser)
        {
            _logger.LogInformation($"Registration attempt for {registrationUser.Email}!");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var user = _mapper.Map<AppUser>(registrationUser);
                var result = await _userManager.CreateAsync(user, registrationUser.Password);

                if (!result.Succeeded)
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(error.Code, error.Description);
                    }
                    return BadRequest($"User Registration attempt failed for {registrationUser.Email}!");
                }

                await _userManager.AddToRolesAsync(user, registrationUser.Roles);
                return Accepted($"User Registration for {registrationUser.Email} was successful!");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something went wrong in the {nameof(Register)}!");
                return Problem($"Something went wrong in the {nameof(Register)}!", statusCode: 500);
            }
        }

        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Login([FromBody] LoginUserDTO loginUser)
        {
            _logger.LogInformation($"Login attempt for {loginUser.Email}!");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                if (!await _authManager.ValidateUser(loginUser))
                {
                    return Unauthorized();
                }
                return Accepted(new { Token = await _authManager.CreateToken() });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something went wrong in the {nameof(Login)}!");
                return Problem($"Something went wrong in the {nameof(Login)}!", statusCode: 500);
            }
        }
    }
}
