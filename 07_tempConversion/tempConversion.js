const convertToCelsius = function(temp) {

  celsius = (temp - 32) * (5/9);


  celsius = Math.round(celsius*10) / 10;

  return celsius;

  //(32°F − 32) × 5/9 = 0°C

};

const convertToFahrenheit = function(temp) {

  fahren = (temp * (9/5)) + 32;

  fahren = Math.round(fahren*10) / 10;

  return fahren;
  //(0°C × 9/5) + 32 = 32°F

};

//convertToCelsius(32) // fahrenheit to celsius, should return 0
//convertToFahrenheit(0) // celsius to fahrenheit, should return 32


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
