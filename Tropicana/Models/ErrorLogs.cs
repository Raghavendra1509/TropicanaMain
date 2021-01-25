using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tropicana.Models
{
    public class ErrorLogs
    {

        [JsonProperty("id")]
        public Int64 Id { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("messageTemplate")]
        public string MessageTemplate { get; set; }

        [JsonProperty("level")]
        public string Level { get; set; }

        [JsonProperty("timeStamp")]
        public DateTime TimeStamp { get; set; }

        [JsonProperty("exception")]
        public string Exception { get; set; }

        [JsonProperty("properties")]
        public string Properties { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }
    }
}
