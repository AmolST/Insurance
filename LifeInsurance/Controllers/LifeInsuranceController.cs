using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LifeInsurance.Models;
using LifeInsurance.Services;

namespace LifeInsurance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LifeInsuranceController : ControllerBase
    {
        private readonly IOccupationService _occupationService;

        public LifeInsuranceController(IOccupationService occupationService)
        {
            _occupationService = occupationService;
        }

        private int GetAge(DateTime dateOfBirth)
        {
            int today = int.Parse(DateTime.Now.ToString("yyyyMMdd"));
            int birthDay = int.Parse(dateOfBirth.ToString("yyyyMMdd"));
            return (today - birthDay) / 10000;
        }

        [HttpGet]
        public IEnumerable<Occupation> GetOccupations()
        {
            return _occupationService.GetOccupations(); 
        }

        [HttpPost]
        public double CalculatePremium(PremiumCalculatorViewModel premiumCalculatorViewModel)
        {
            var ratingFactor = _occupationService.GetRatingFactor(premiumCalculatorViewModel.Occupation);
            var age = GetAge(premiumCalculatorViewModel.DateOfBirth);
            var deathPremium = (premiumCalculatorViewModel.SumInsured * ratingFactor * age) / 1000 * 12;
            
            return deathPremium;
        }

    }
}
