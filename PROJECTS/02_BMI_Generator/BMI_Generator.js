const form = document.querySelector("form");

// this usecase will give you empty.
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // if we query before the listener it will take empty value which gives wrong value.
  const height = parseInt(document.querySelector("#height").value).toFixed(2);
  const weight = parseInt(document.querySelector("#weight").value).toFixed(2);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
