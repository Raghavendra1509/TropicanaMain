using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Tropicana.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class DetailsController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            Serilog.Log.Information("test info");

            return "hello";
        }
    }
}