using System.Collections.Generic;
using LifeInsurance.Models;

namespace LifeInsurance.Services
{
    public class OccupationService : IOccupationService
    {
        public IEnumerable<Occupation> Occupations = new List<Occupation>();

        public IEnumerable<Occupation> GetOccupations()
        {
            InitializeOccupation();
            return Occupations;
        }

        private void InitializeOccupation()
        {
            Occupations = new List<Occupation>
            {
                new() { Name = "Cleaner", Rating = "Light Manual"},
                new() { Name = "Doctor", Rating = "Professional"},
                new() { Name = "Author", Rating = "White Collar"},
                new() { Name = "Farmer", Rating = "Heavy Manual"},
                new() { Name = "Mechanic", Rating = "Heavy Manual"},
                new() { Name = "Florist", Rating = "Light Manual"}
            };
        }
    }
}