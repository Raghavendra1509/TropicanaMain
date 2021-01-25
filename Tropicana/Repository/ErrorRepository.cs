using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tropicana.Models;
using Tropicana.Services;

namespace Tropicana.Repository
{
    public class ErrorRepository : IErrorService
    {
        private AppDBContext _context;
        public ErrorRepository(AppDBContext appDBContext)
        {
            _context = appDBContext;
        }
        public async Task<List<ErrorLogs>> GetAllErrors()
        {
            return await _context.ErrorLogs.ToListAsync();
        }
    }
}
