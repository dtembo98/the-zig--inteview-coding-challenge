using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MovieApi.Helpers
{
    public class HttpClientHelper<T>
    {
        private IHttpClientFactory _httpClientFactory;
        

        public async Task<T> FetchData(string endpoint)
        {
            var client = _httpClientFactory.CreateClient("Movie Api");
            var result = await client.GetAsync(endpoint);
            
            
                var content = await result.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<T>(content);
            

            
        }
    }
}