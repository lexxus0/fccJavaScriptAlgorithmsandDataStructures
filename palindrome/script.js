const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkPalindrome() {
  const inputValue = document.getElementById("text-input").value;
  const cleanedValue = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedValue = cleanedValue.split("").reverse().join("");
  const isPalindrome = cleanedValue === reversedValue;

  if (inputValue === "") {
    alert("Please input a value");
  } else {
    if (isPalindrome) {
      result.textContent = `${inputValue} is a palindrome!`;
    } else {
      result.textContent = `${inputValue} is not a palindrome!`;
    }
  }
}

checkBtn.addEventListener("click", checkPalindrome);
