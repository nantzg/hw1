// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw1
// (Windows)   cd c:\code\hw1
// Then type:
// node hw1.js

// HOMEWORK 1

// Given the following JavaScript object that represents weather data,
// write a weather summary out to the screen, when this code is executed.
// Something like this:

// Currently it is 67 degrees and sunny. Tomorrow it will be 65 and Mostly Cloudy.
// The next day it we will see Partly Cloudy skies, with a temperature of 70.

let weatherData = {
  current: {
    temperature: 67,
    conditions: "Sunny"
  },
  forecast: [
    { temperature: 65, conditions: "Mostly Cloudy" },
    { temperature: 70, conditions: "Partly Cloudy" }
  ]
}

let forecastTemp = [65, 70]
let forecastCond = ["Mostly Cloudy", "Partly Cloudy"]

console.log("Do your homework!");
console.log("Currently is is " + weatherData.current.temperature + " degrees and " + weatherData.current.conditions + ".")
console.log("Tomorrow it will be " + forecastTemp[0] + " and " + forecastCond[0] + ".")
console.log("The next day we will see " + forecastCond[1] + " skies, with a temperature of " + forecastTemp[1] + ".")
