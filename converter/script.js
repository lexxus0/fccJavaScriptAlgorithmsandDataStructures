const inputElement = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const resultElement = document.getElementById("output");

const romanSymbols = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convertToRoman(num) {
  if (!num) return "Please enter a valid number";
  if (num >= 4000) return "Please enter a number less than or equal to 3999";
  if (num <= 0) return "Please enter a number greater than or equal to 1";

  let romanNumeral = "";

  romanValues.forEach((value, index) => {
    while (num >= value) {
      romanNumeral += romanSymbols[index];
      num -= value;
    }
  });

  return romanNumeral;
}

convertButton.addEventListener("click", () => {
  const num = parseInt(inputElement.value);
  resultElement.textContent = convertToRoman(num);
});

inputElement.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    convertButton.click();
  }
});
