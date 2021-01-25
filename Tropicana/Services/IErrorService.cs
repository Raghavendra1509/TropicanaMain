using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tropicana.Models;

namespace Tropicana.Services
{
    public interface IErrorService
    {
        Task<List<ErrorLogs>> GetAllErrors();
    }
}
