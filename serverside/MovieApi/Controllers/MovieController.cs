using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using  Newtonsoft;
using MovieApi.Models;
using Newtonsoft.Json;
using MovieApi.Services;

namespace MovieApi.Controllers
{
    [ApiController]
    [Route("api/movie")]
    public class MovieController : ControllerBase
    {
        private IMovie _movie;

        public MovieController(IMovie movie)
        {
            _movie = movie;
        }
        [HttpGet("popular")]
        public async Task<IActionResult> GetPopularMovies([FromQuery(Name = "page")] int page = 1)
        {
            var  model = await _movie.GetPopularMovies(page);
            if (model == null)
            {
               
                return NotFound();
            }

            return Ok(model);

        }
        
        [HttpGet("search")]
        public async Task<IActionResult> SearchMovie([FromQuery(Name = "query")] string query)
        {
         
            var model = await _movie.SearchMovie(query);
            if (model == null)
            {
                return NotFound();
            }
            
            return Ok(model);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie(long id)
        {
            var model = await _movie.GetMovie(id);
            if (model == null)
            {
                return NotFound();
            }
            return Ok(model);
        }

        [HttpGet("credits/{id}")]
        public async Task<IActionResult> GetMovieCredits(int id)
        {
            var model = await _movie.GetMovieCredits(id);
            if (model == null)
            {
                return NotFound();
            }
            return Ok(model);
        }
    }
    
}