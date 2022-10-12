using IKnowAGuy.Models;
using IKnowAGuy.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IKnowAGuy.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AdsController : ControllerBase
    {
        private readonly IAdService _adService;

        public AdsController(IAdService adService)
        {
            _adService = adService;
        }

        // GET: api/<AdsController>
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
        public ActionResult<Ad> GetAd(int id)
        {
            var ad = _adService.GetAdById(id);
            if(ad == null)
                return NotFound();
            return Ok(ad);
        }

        // POST api/<AdsController>
        [HttpPost]
        public ActionResult Post([FromBody] Ad ad)
        {
            if(ad == null)
                return BadRequest(ModelState);

            if(!_adService.CreateAd(ad))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return CreatedAtAction("post",ad);
        }

        // PUT api/<AdsController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Ad ad)
        {
        }

        // DELETE api/<AdsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
