using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Models;
using Newtonsoft.Json;
using MovieApi.Helpers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace MovieApi.Services
{
    public class MovieService : IMovie
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IOptions<ServiceSettings> _serviceSettings;
        public MovieService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
            
        }

       
        public async Task<MovieCollection> GetPopularMovies(int PageNumber = 1)
        {
            // Get an instance of HttpClient from the factpry that we registered
            // in Startup.cs
            var client = _httpClientFactory.CreateClient("Movie Api");

            // Call the API & wait for response. 
            // If the API call fails, call it again according to the re-try policy
            // specified in Startup.cs
            var result =
                await client.GetAsync(
                    $"movie/popular?api_key=18783d19189b3c4c0abc3c8e3080d3da&language=en-US&page={PageNumber}");
            if (result.IsSuccessStatusCode)
            {
                // Read all of the response and deserialise it into an instace of

                var content = await result.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<MovieCollection>(content);
            }

            return null;
        }

        public async Task<MovieCollection> SearchMovie(string query)
        {
            var client = _httpClientFactory.CreateClient("Movie Api");
            var result = await client.GetAsync($"search/movie?api_key=18783d19189b3c4c0abc3c8e3080d3da&query=${query}");

            if (result.IsSuccessStatusCode)
            {
                var content = await result.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<MovieCollection>(content);
            }

            return null;
        }

        public async Task<Movie> GetMovie(long Id)
        {
            var client = _httpClientFactory.CreateClient("Movie Api");
            var result =
                await client.GetAsync($"movie/{Id}?api_key=18783d19189b3c4c0abc3c8e3080d3da&language=en-US&page=1");

            if (result.IsSuccessStatusCode)
            {
                var content = await result.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<Movie>(content);
            }

            return null;
        }

        public async Task<Credits> GetMovieCredits(int Id)
        {
            var client = _httpClientFactory.CreateClient("Movie Api");
            var result =
                await client.GetAsync(
                    $"movie/{Id}/credits?api_key=18783d19189b3c4c0abc3c8e3080d3da&language=en-US&page=1");

            if (result.IsSuccessStatusCode)
            {
                var content = await result.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<Credits>(content);
            }

            return null;
        }
    }
}