import fetch from "node-fetch";
async function fetchData() {
    
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      return data;
   
  }
  
  // Task 1: Get all the countries from Asia continent/region using Filter function
  async function getCountriesInAsia() {
    const countries = await fetchData();
    const countriesInAsia = countries.filter(country => country.region === 'Asia')
    console.log('Countries in Asia:')
    countriesInAsia.forEach(country => {
        console.log(country.name.common);
    })
  }
  
  // Task 2: Get all the countries with a population of less than 2 lakhs using Filter function
  async function getCountriesWithLowPopulation() {
    const countries = await fetchData();
    const countriesWithLowPopulation = countries.filter(country => {
      return country.population && country.population < 200000;
    });
    console.log('Countries with population less than 2 lakhs:');
    countriesWithLowPopulation.forEach(country => {
        console.log(country.name.common);
    })
  }
  
  // Task 3: Print details (name, capital, flag) using forEach function
  async function printCountryDetails() {
    const countries = await fetchData();
    countries.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flag);
      console.log('---------------------');
    });
  }
  
  // Task 4: Print the total population of countries using reduce function
  async function getTotalPopulation() {
    const countries = await fetchData();
    const totalPopulation = countries.reduce((acc, country) => {
      return acc + (country.population);
    }, 0);
    console.log('Total population of countries:', totalPopulation);
  }
  
  // Task 5: Print the country that uses US dollars as currency
  async function getCountryWithUSD() {
    const countries = await fetchData();
    const countryWithUSD = countries.find(country => {
      return country.currencies.USD;
    });
    console.log('Country that uses US dollars:');
    console.log(countryWithUSD.name.common);
  }
  

  getCountriesInAsia();
  getCountriesWithLowPopulation();
  printCountryDetails();
  getTotalPopulation();
  getCountryWithUSD();
  