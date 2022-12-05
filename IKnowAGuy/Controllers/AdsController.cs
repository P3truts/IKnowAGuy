﻿using IKnowAGuy.Models;
using IKnowAGuy.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IKnowAGuy.Controllers
{
    [Route("[controller]")]
    public class AdsController : ControllerBase
    {
        private readonly IAdService _adService;
        private readonly ILogger<AdsController> _logger;
        private readonly IAuthManager _authManager;

        public AdsController(IAdService adService, ILogger<AdsController> logger, IAuthManager authManager)
        {
            _adService = adService;
            _logger = logger;
            _authManager = authManager;
        }

        // GET: /<AdsController>
        [HttpGet]
        public ActionResult<IEnumerable<Ad>> GetAds()
        {
            var ads =  _adService.GetAllAds();
            if (!ads.Any())
                return NotFound();

            return Ok(ads);
        }

        // GET api/<AdsController>/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
/*        [Authorize(AuthenticationSchemes = "Bearer")]*/
        [Authorize(AuthenticationSchemes = "JWT_OR_COOKIE")]
        public ActionResult<Ad> GetAd(int id)
        {
            /*            var ad = _adService.GetAdById(id);
                        if(ad == null)
                            return NotFound();
                        return Ok(ad);*/
            try
            {
                var ad = _adService.GetAdById(id);
                return Ok(ad);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something went wrong in the {nameof(GetAd)}");
                return StatusCode(500, "Internal Server Error. Please try again later.");
            }
        }

        // POST api/<AdsController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Ad ad)
        {
            if(ad == null)
                return BadRequest(ModelState);

            var jwt = Request.Cookies["jwt"];
            var token = await _authManager.Verify(jwt);

            var username = token.Claims?.FirstOrDefault()?.Value;
            var user = await _authManager.GetUserAsync(username);
            var userRoles = await _authManager.GetUserRolesAsync(user);

            ad.UserId= user.Id;

            //TODO: AD SHOULD HAVE A ROLE ID?
            //ad.RoleId = userRoles.FirstOrDefault();
            ad.RoleId = "ff59a2c4-78a8-478c-8efd-ff322928526e";
            if (!_adService.CreateAd(ad))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return CreatedAtAction("post",ad);
        }

        // PUT api/<AdsController>
        [HttpPut]
        public ActionResult Put([FromBody] Ad ad)
        {
           /* ad.Address = address;
            ad.Service = service;
            ad.Service.Job = job;*/
           if(!ModelState.IsValid)
                return BadRequest(ModelState);

            _adService.UpdateAd(ad);

            return Ok(ad);
          
        }

        // DELETE api/<AdsController>/5
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(long id)
        {
            var ad = _adService.GetAdById(id);

            if (ad == null)
                return NotFound();
            var deleted = _adService.DeleteAd(ad);
            if (!deleted)
                ModelState.AddModelError("", "Something went wrong deleting the ad");

            return NoContent();
        }

        // GET: /<AdsController>/searchedKeyword
        [HttpGet("search/{searched}")]
        public ActionResult<IEnumerable<Ad>> GetSearchedAds(string searched)
        {
            var ads = _adService.GetSearchedAds(searched);
            if (!ads.Any())
                return NotFound();

            return Ok(ads);
        }
    }
}
