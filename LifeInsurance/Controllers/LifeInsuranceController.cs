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
        
        [HttpGet]
        public IEnumerable<Occupation> GetOccupations()
        {
            return _occupationService.GetOccupations(); 
        }

    }
}
