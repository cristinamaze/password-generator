// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Variable Arrays// 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_","=", "+", "|", "?", ",", ".", "<", ">"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Variable Choices//
var lengthChoice = "";
var numberChoice;
var symbolChoice;
var lowercaseChoice;
var uppercaseChoice;

//Window Prompts//
function generatePassword() {
  var lengthChoice = (prompt("How many characters would you like your password to contain?"));

  //Min/Max Length Alert// 
  if (lengthChoice < 8 || lengthChoice > 128) { 
   alert ("Password length must be between 8 and 128 characters");
      var lengthChoice = (prompt("How many characters would you like your password to contain?"));
    } 

  var numberChoice = confirm("Would you like to include number values?"); 
  var symbolChoice = confirm("Would you like to include symbols?");   
  var lowercaseChoice = confirm("Would you like to include lowercase values?");
  var uppercaseChoice = confirm("Would you like to include uppercase values?");

      //Loop if no variables are chosen//
      while (numberChoice === false && symbolChoice === false && lowercaseChoice === false && uppercaseChoice === false) {
        alert("You must choose at least one parameter");
        var numberChoice = confirm("Would you like to include number values?"); 
        var symbolChoice = confirm("Would you like to include symbols?");   
        var lowercaseChoice = confirm("Would you like to include lowercase values?");
        var uppercaseChoice = confirm("Would you like to include uppercase values?"); 
    } 

     //Concat variable options//
      var passwordOptions = []

    if (numberChoice) {
        passwordOptions = passwordOptions.concat(numbers)
    }  
      
    if (symbolChoice) {
      passwordOptions = passwordOptions.concat(symbols)
    }
      
    if (lowercaseChoice) {
      passwordOptions = passwordOptions.concat(lowercase)
    }

    if (uppercaseChoice) {
        passwordOptions = passwordOptions.concat(uppercase)
    }


      console.log(passwordOptions)

      //Password String//
      var passwordString = ""
      
      for (var i = 0; i < lengthChoice; i++) {
        passwordString = passwordString + passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
        console.log(passwordString)
      }
      return passwordString;
}
