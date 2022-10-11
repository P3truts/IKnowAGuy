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
        public IEnumerable<Ad> Get()
        {
            return _adService.GetAllAds();
        }

        // GET api/<AdsController>/5
        [HttpGet("{id}")]
        public Ad Get(int id)
        {
            return _adService.GetAdById(id);
        }

        // POST api/<AdsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AdsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AdsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
