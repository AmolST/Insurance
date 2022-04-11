using System.Collections.Generic;
using LifeInsurance.Models;

namespace LifeInsurance.Services
{
    public interface IOccupationService
    {
        IEnumerable<Occupation> GetOccupations();
    }
}
