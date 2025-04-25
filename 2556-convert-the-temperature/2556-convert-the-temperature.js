/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const kelvin = celsius + 273.15
    const fahrenheit = celsius * 1.80 + 32.00 
    console.log(kelvin.toFixed(5))
    console.log(fahrenheit.toFixed(5))
    return [kelvin,fahrenheit]
};