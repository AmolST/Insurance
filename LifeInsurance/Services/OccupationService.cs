using System.Collections.Generic;
using System.Linq;
using LifeInsurance.Models;

namespace LifeInsurance.Services
{
    public class OccupationService : IOccupationService
    {
        private IEnumerable<Occupation> Occupations;
        private IEnumerable<OccupationRating> OccupationRatings;

        public OccupationService()
        {
            InitializeOccupation();
            InitializeOccupationRatings();
        }

        #region Private Methods
    
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

        private void InitializeOccupationRatings()
        {
            OccupationRatings = new List<OccupationRating>
            {
                new() { Rating = "Professional", Factor = 1.0 },
                new() { Rating = "White Collar", Factor = 1.25 },
                new() { Rating = "Light Manual", Factor = 1.50 },
                new() { Rating = "Heavy Manual", Factor = 1.75 }
            };
        }

        #endregion

        #region Public Methods

        public IEnumerable<Occupation> GetOccupations()
        {
            return Occupations;
        }

        public double GetRatingFactor(string occupationRating)
        {
            var rating = OccupationRatings.FirstOrDefault(x => x.Rating == occupationRating);
            return rating?.Factor ?? 0.0;
        } 
        
        #endregion

    }
}