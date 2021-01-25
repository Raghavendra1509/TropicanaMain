using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tropicana.Models
{
    public class Payments
    {
        [JsonProperty("id")]
        public Int64 Id { get; set; }

        [JsonProperty("accountId")]
        public Int64 AccountId { get; set; }

        [JsonProperty("amount")]
        public string Amount { get; set; }

        [JsonProperty("globalId")]
        public Guid? GlobalId { get; set; }

        [JsonProperty("paymentTypeId")]
        public int PaymentTypeId { get; set; }

        [JsonProperty("cardName")]
        public string CardName { get; set; }

        [JsonProperty("cardExpiration")]
        public string CardExpiration { get; set; }

        [JsonProperty("cratedDate")]
        public DateTime CratedDate { get; set; }
    }
}
