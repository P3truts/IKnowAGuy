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
                    return BadRequest(result);
                    //return BadRequest($"User Registration attempt failed for {registrationUser.Email}!");
                }

                await _userManager.AddToRolesAsync(user, registrationUser.Roles);
                //return Accepted($"User Registration for {registrationUser.Email} was successful!");
                return Accepted(new { succeeded = true }) ;
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
                var validUser = await _authManager.ValidateUser(loginUser);
                if (!validUser.Item1)
                {
                    return Unauthorized();
                }

                var jwt = await _authManager.CreateToken();

                Response.Cookies.Append("jwt", jwt, new CookieOptions
                {
                    HttpOnly = true
                });

                /*                return Accepted(new { Token = await _authManager.CreateToken() });*/

                return Accepted(new { Token = jwt, username = validUser.Item2});
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something went wrong in the {nameof(Login)}!");
                return Problem($"Something went wrong in the {nameof(Login)}!", statusCode: 500);
            }
        }

        [HttpGet("user")]
        public async Task<IActionResult> User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];
                var token = await _authManager.Verify(jwt);

                var username = token.Claims?.FirstOrDefault()?.Value;

                return Ok(username);
            }
            catch (Exception)
            {
                return Unauthorized();
            }

        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");

            return Ok();
        }
    }
}
