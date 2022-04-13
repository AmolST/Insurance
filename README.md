# LifeInsurance

This project is to calculate monthly life insurance premium.

Following technology stack used
- ASP.Net Core WebAPI
- Angular 6.0
- Typescript


## Setup

Clone the repository and open Insurance.sln using Visual Studio 2019 or greater.


## Build

Build Insurance.sln solution, which will restore the NuGet packages required for the application.

## Running Application

Run application locally using IIS Express. 

This will launch both UI and WebAPI service. WebAPI service will launch in background.

## Use Application
To navigate to premium calculator, either by clicking 'Premium Calculator' button on home screen or 'Life Insurance' navigation button on top right corner.

Assumptions:
- All fields are mandatory
- Instead of Age, we took date of birth which gives us Age of user
- Age should be in the range of 16 to 70 to calculate premium

Completed:
- When provided all fields and click on Calculate, monthly premium calculated
- When changed the occupation then monthly premium updated based on selection

TODO:
- Validation of date of birth field when user manually enter
- Validation for sum insured when user type invalid values
