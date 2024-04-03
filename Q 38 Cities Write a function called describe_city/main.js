"use strict";
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. 
// Give the parameter for the country a default value. Call your function for three different cities, 
// at least one of which is not in the default country.
// solved
function describe_city(city, country = `Default Country`) {
    console.log(` ${city} is in ${country}`);
}
describe_city(`karachi`, `pakistan`);
describe_city(`tokiyo`, `japan`);
describe_city(`paris`);
