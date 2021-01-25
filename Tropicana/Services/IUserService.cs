using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tropicana.Models;
using Tropicana.Models.DTOs;

namespace Tropicana.Services
{
    public interface IUserService
    {
        Task<UserType> NewUserType(UserTypeDTO userTypeDTO);
        Task<bool> AddNewUser(NewUserDTO newUser);

        Task<Users> GetUserDetails(string userName);
    }
}
