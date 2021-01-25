using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Tropicana.Models;
using Tropicana.Services;

namespace Tropicana.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AccountsController : ControllerBase
    {
        private readonly ILogger<AccountsController> _logger;
        private readonly IAccountService _accountService;
        public AccountsController(IAccountService service, ILogger<AccountsController> logger)
        {
            _accountService = service;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var result = await _accountService.GetAllAccounts();

                _logger.LogInformation("AccountsController" + result);
                return Ok(result);

            }
            catch (Exception Ex)
            {
                _logger.LogError(Ex.Message);
                return BadRequest(Ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Accounts newAccount)
        {
            try
            {
                var result = await _accountService.CreateAccount(newAccount);
                return Ok(result);
            }
            catch (Exception Ex)
            {

                return BadRequest(Ex.Message);
            }
        }
    }
}