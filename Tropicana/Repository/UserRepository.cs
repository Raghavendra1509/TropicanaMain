using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tropicana.Models;
using Tropicana.Models.DTOs;
using Tropicana.Services;
using Tropicana.Utilities;

namespace Tropicana.Repository
{
    public class UserRepository : IUserService
    {
        private AppDBContext _context;
        public UserRepository(AppDBContext appDBContext)
        {
            _context = appDBContext;
        }

        public async Task<bool> AddNewUser(NewUserDTO newUserObject)
        {

            Users newUser = new Users();
            newUser.UserName = newUserObject.UserName;
            newUser.Password = Security.Encrypt(newUserObject.Password);
            newUser.UserTypeID = newUserObject.UserTypeID;
            newUser.CreatedBy = newUserObject.CreatedBy;
            newUser.CreatedDate = DateTimeOffset.Now;
            newUser.ModifiedBy = null;
            newUser.ModifiedDate = null;
            newUser.IsActive = true;
            newUser.IsDeleted = false;

            var result = _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();

            if (result != null)
            {

                return true;
            }
            else
            {
                return false;
            }


        }

        public async Task<Users> GetUserDetails(string userName)
        {
            var userDetail =  await _context.Users.Where(a => a.UserName.Equals(userName)).FirstOrDefaultAsync();

            return userDetail;
        }

        public async Task<UserType> NewUserType(UserTypeDTO userTypeDTO)
        {
            UserType obj = new UserType();
            obj.Code = userTypeDTO.Code;
            obj.Description = userTypeDTO.Description;
            obj.Type = userTypeDTO.Type;
            obj.CreatedBy = userTypeDTO.CreatedBy;
            obj.CreatedDate = DateTimeOffset.Now;

            var result = _context.UserTypes.AddAsync(obj);
            await _context.SaveChangesAsync();

            if (result != null)
            {

                return obj;
            }
            else
            {
                return new UserType();
            }
        }
    }
}
