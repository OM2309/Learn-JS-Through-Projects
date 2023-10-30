const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results"); // Corrected from #result to #results

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    results.innerHTML = "Please enter valid values for height and weight.";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // Fixed the BMI calculation formula
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
