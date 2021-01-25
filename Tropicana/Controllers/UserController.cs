using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tropicana.Models;
using Tropicana.Models.DTOs;
using Tropicana.Services;
using Tropicana.Utilities;

namespace Tropicana.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserService _service;
        public UserController(IUserService userService)
        {
            _service = userService;
        }

        [HttpPost, Route("AddUserType")]
        public async Task<IActionResult> AddUserType([FromBody] UserTypeDTO userType)
        {
            try
            {
                var result = await _service.NewUserType(userType);

                if (result != null)
                {

                    return Ok(result);
                }
                else
                {
                    return BadRequest(userType);
                }
            }
            catch (Exception ex)
            {

                return BadRequest("Error"+ ex.Message);
            }
        }

        [HttpPost, Route("Register")]
        public async Task<IActionResult> Register([FromBody] NewUserDTO newUser)
        {
            try
            {
                var result = await _service.AddNewUser(newUser);

                if (result)
                {

                    return Ok(result);
                }
                else
                {
                    return BadRequest(newUser);
                }
            }
            catch (Exception ex)
            {

                return BadRequest("Error" + ex.Message);
            }
        }

        [HttpPost, Route("Login")]
        public async Task<IActionResult> Login([FromBody] Login login)
        {
            try
            {
                IActionResult response = Unauthorized();

                var userDetail = await _service.GetUserDetails(login.UserName.Trim());
                if (userDetail != null)
                {
                    if (Security.isValidPassword(login.Password, userDetail.Password))
                    {
                        var token = Security.GenerateJWTToken(userDetail);

                        response = Ok(new { UserName = userDetail.UserName, CreatedDate = userDetail.CreatedDate, IsActive = userDetail.IsActive, token = token });
                        return response;
                    }
                    else
                    {
                        return BadRequest("Invalid Password");
                    }
                }
                else
                {
                    return BadRequest("Try Again");
                }
            }
            catch (Exception ex)
            {

                return BadRequest("Error" + ex.Message);
            }
        }

    }
}