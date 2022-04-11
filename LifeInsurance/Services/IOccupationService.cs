using System.Collections.Generic;
using LifeInsurance.Models;

namespace LifeInsurance.Services
{
    /// <summary>
    /// Occupation service provides occupation and related details
    /// </summary>
    public interface IOccupationService
    {
        /// <summary>
        /// Gets the occupations.
        /// </summary>
        /// <returns></returns>
        IEnumerable<Occupation> GetOccupations();

        /// <summary>
        /// Gets the rating factor.
        /// </summary>
        /// <param name="occupationRating">The occupation rating.</param>
        /// <returns></returns>
        double GetRatingFactor(string occupationRating);
    }
}
