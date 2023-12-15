let temp, converted;

document.getElementById("submitButton").onclick = function () {
  temp = parseFloat(document.getElementById("tempField").value);

  if (document.getElementById("celsius").checked) {
    converted = toCelsius(temp);
    document.getElementById("resultLabel").innerHTML =
      converted.toFixed(2) + " °C";
  } else if (document.getElementById("fahrenheit").checked) {
    converted = toFahrenheit(temp);
    document.getElementById("resultLabel").innerHTML =
      converted.toFixed(2) + " °F";
  }
};

function toCelsius(temp) {
  return ((temp - 32) * 5) / 9;
}
function toFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}
