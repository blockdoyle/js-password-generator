// Create character strings
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*";

// Generate password with user options from userChoice
function generatePassword(length, upperChoice, lowerChoice, specialChoice) {
  if (length < 8 || length > 128) {
    return "Error: Password length must be between 8 and 128 characters.";
  }

  var lowerArray = lowercase.split("");
  var upperArray = uppercase.split("");
  var specialArray = special.split("");

  console.log(lowerArray,upperArray,specialArray);
}

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
  var password = generatePassword(userChoice.length, userChoice.uppercase, userChoice.lowercase, userChoice.special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
