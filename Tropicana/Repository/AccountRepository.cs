using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tropicana.Models;
using Tropicana.Services;

namespace Tropicana.Repository
{
    public class AccountRepository : IAccountService
    {
        private AppDBContext _context;
        public AccountRepository(AppDBContext appDBContext)
        {
            _context = appDBContext;
        }

        public async Task<Accounts> CreateAccount(Accounts newAccount)
        {
            await _context.Accounts.AddAsync(newAccount);
            var result =  _context.SaveChangesAsync();
            return newAccount;
        }

        public async Task<List<Accounts>> GetAllAccounts()
        {
            return await _context.Accounts.ToListAsync(); 
        }
    }
}
