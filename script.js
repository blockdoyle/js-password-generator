// Create character strings
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*";

//s

// Generate password with user options from userChoice
function generatePassword(length, upperChoice, lowerChoice, specialChoice) {
  if (length < 8 || length > 128) {
    return "Error: Password length must be between 8 and 128 characters.";
  }

  var selectedOptions = "";
  if (upperChoice === true) {
    selectedOptions = selectedOptions.concat(uppercase);
  }
  if (lowerChoice === true) {
    selectedOptions = selectedOptions.concat(lowercase);
  }
  if (specialChoice === true) {
    selectedOptions = selectedOptions.concat(special);
  }
  
  selectedOptions = selectedOptions.split("");
  var finsihedPassword = "";
  for (var i = 0; i < length; i++){
    finsihedPassword += selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
  }
  
  return finsihedPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Get user input for password generation options
  var userChoice = {
    length: window.prompt("Enter password length"),
    useUpperCase:
      window.prompt("Use uppercase letters? Y/N").toLowerCase() === "y",
    useLowerCase:
      window.prompt("Use lowercase letters? Y/N").toLowerCase() === "y",
    useSpecialChars:
      window.prompt("Use special characters? Y/N").toLowerCase() === "y",
  };
  var password = generatePassword(
    userChoice.length,
    userChoice.useUpperCase,
    userChoice.useLowerCase,
    userChoice.useSpecialChars
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
