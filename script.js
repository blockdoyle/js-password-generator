// Create character strings
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase;
var special = "!@#$%^&*";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Get user input for password generation options
  var userChoice = {
    length: window.prompt("Enter password length"),
    useUpperCase: window.prompt("Use uppercase letters? Y/N"),
    useLowerCase: window.prompt("Use lowercase letters? Y/N"),
    useSpecialChars: window.prompt("Use special characters? Y/N")
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
