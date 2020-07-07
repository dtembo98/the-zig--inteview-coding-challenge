using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Moq.Protected;
using NUnit.Framework;
using MovieApi;
using MovieApi.Models;
using MovieApi.Services;
using Newtonsoft.Json;

namespace MovieApi_Tests.ServicesTests
{
    public class Movie_GetPopularMoviesTests
    {
        [Test]
        public async Task GetPopularMovies_WhenCalled_ReturnMovieCollection()
        {
            var moviecollection = new MovieCollection();
            //Arrange
            var mockFactory = new Mock<IHttpClientFactory>();

      
            var mockHttpMessageHandler = new Mock<HttpMessageHandler>();
            mockHttpMessageHandler.Protected()
                .Setup<Task<HttpResponseMessage>>("SendAsync", ItExpr.IsAny<HttpRequestMessage>(), ItExpr.IsAny<CancellationToken>())
                .ReturnsAsync(new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.OK,
                    Content  = new StringContent(JsonConvert.SerializeObject(moviecollection), Encoding.UTF8, "application/json") 

                });

            var client = new HttpClient(mockHttpMessageHandler.Object);
            client.BaseAddress = new Uri("https://api.themoviedb.org/3/");
            mockFactory.Setup(_ => _.CreateClient("Movie Api")).Returns(client);
      
            //act
            var services = new MovieService(mockFactory.Object);
            var result = await services.GetPopularMovies(1);


            //assert
            Assert.IsNotNull(result);
            Assert.That(result,Is.TypeOf<MovieCollection>());
        }

        [Test]
        public async Task GetPopularMovies_WhenCalled_ReturnNull()
        {
            //Arrange
            var mockFactory = new Mock<IHttpClientFactory>();

      
            var mockHttpMessageHandler = new Mock<HttpMessageHandler>();
            mockHttpMessageHandler.Protected()
                .Setup<Task<HttpResponseMessage>>("SendAsync", ItExpr.IsAny<HttpRequestMessage>(), ItExpr.IsAny<CancellationToken>())
                .ReturnsAsync(new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.OK,
                    Content  = new StringContent(JsonConvert.SerializeObject(null), Encoding.UTF8, "application/json") 

                });

            var client = new HttpClient(mockHttpMessageHandler.Object);
            client.BaseAddress = new Uri("https://api.themoviedb.org/3/");
            mockFactory.Setup(_ => _.CreateClient("Movie Api")).Returns(client);
      
            //act
            var services = new MovieService(mockFactory.Object);
            var result = await services.GetPopularMovies(1);


            //assert
            Assert.IsNull(result);
        }
    }
}