const tempInput = document.getElementById("tempInput");

const tempScale = document.getElementById("tempScale");

const convertBtn = document.getElementById("convertBtn");

const result = document.getElementById("result");

function convertTemperature() {
  const tempValue = parseFloat(tempInput.value);

  const scale = tempScale.value;

  let convertedTemp;

  if (isNaN(tempValue)) {
    result.textContent = "Please enter a valid temperature!";

    return;
  }
  if (scale === "celsius") {
    convertedTemp = (tempValue * 9) / 5 + 32;
    result.textContent = `${tempValue}°C is ${convertedTemp.toFixed(2)}°F`;
  } else {
    convertedTemp = ((tempValue - 32) * 5) / 9;
    result.textContent = `${tempValue}°F is ${convertedTemp.toFixed(2)}°C`;
  }
}

convertBtn.addEventListener("click", convertTemperature);
