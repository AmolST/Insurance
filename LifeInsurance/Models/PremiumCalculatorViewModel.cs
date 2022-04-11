using System;

namespace LifeInsurance.Models
{
    public class PremiumCalculatorViewModel
    {
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Occupation { get; set; }
        public double SumInsured { get; set; }
    }
}