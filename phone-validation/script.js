document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("user-input");
  const checkButton = document.getElementById("check-btn");
  const clearButton = document.getElementById("clear-btn");
  const resultElement = document.getElementById("results-div");

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

    return phoneRegex.test(phoneNumber);
  };

  const displayResult = (message, isValid) => {
    const resultMessage = document.createElement("p");
    resultMessage.textContent = message;
    resultMessage.style.color = isValid ? "green" : "red";
    resultElement.appendChild(resultMessage);
  };

  const handleValidation = () => {
    const phoneNumber = inputElement.value.trim();
    if (phoneNumber === "") {
      alert("Please provide a phone number");
      return;
    }
    if (validatePhoneNumber(phoneNumber)) {
      displayResult(`Valid US  number: ${phoneNumber}`, true);
    } else {
      displayResult(`Invalid US  number: ${phoneNumber}`, false);
    }
    inputElement.value = "";
  };

  const handleClear = () => {
    inputElement.value = "";
    resultElement.innerHTML = "";
  };

  checkButton.addEventListener("click", handleValidation);
  clearButton.addEventListener("click", handleClear);
});

if (brain != empty) {
  keepCoding();
} else {
  orderTea();
}

//
