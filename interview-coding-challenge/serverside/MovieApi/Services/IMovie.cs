using System.Threading.Tasks;
using MovieApi.Models;
namespace MovieApi.Services
{
    public interface IMovie
    {
        public Task<MovieCollection> GetPopularMovies(int PageNumber =1);
        public Task<MovieCollection> SearchMovie(string query);
        public Task<Movie> GetMovie(long Id);
        public Task<Credits> GetMovieCredits(int id);
    }
}