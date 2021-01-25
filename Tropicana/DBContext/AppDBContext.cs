using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tropicana.Models;

namespace Tropicana.Repository
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options): base(options)
        {

        }

        public DbSet<UserType> UserTypes { get; set; }

        public DbSet<Users> Users { get; set; }

        public DbSet<Accounts> Accounts { get; set; }
        public DbSet<PaymentMethods> PaymentMethods { get; set; }
        public DbSet<Payments> Payments { get; set; }
        public DbSet<ErrorLogs> ErrorLogs { get; set; }
    }
}
