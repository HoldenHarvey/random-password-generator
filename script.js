// Assignment code here
var letters1 = "abcdefghijklmnopqrstuvwxyz";
var letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var characters1 = "`~!@#$%^&*()-_=+[]{}\|;:',.<>/?";
var characters2 = "1234567890"

var lowerCase = letters1.split("");
var upperCase = letters2.split("");
var specialCharacters = characters1.split("");
var numbers = characters2.split("");

// var allLetters = lowerCase.concat(upperCase);
// var allSpecialCharacters = lowerCase.concat(specialCharacters);
// var allNumbers = lowerCase.concat(numbers);
var allCharacters = []

// var allSpecialCharactersAndNumbers = allSpecialCharacters.concat(numbers);
// var allSpecialCharactersAndUpperCase = allSpecialCharacters.concat(upperCase);
// var allNumbersAndUpperCase = allNumbers.concat(upperCase)

var buttonPush = document.querySelector("#generate");
var result = "";

buttonPush.addEventListener("click", generatePassword)

function generatePassword() {
  
  var displayPassword = document.querySelector("#password")
  result = ""
  var prompt = window.prompt("Choose the number of character in your password (8-128)");
  if (prompt < 8) {
    window.alert("Your password must be at least 8 characters long.")
    return
  }
  if (prompt > 128) {
    window.alert("Your password must be at less than 128 characters long.")
    return
  }
  var promptLowerCase = window.confirm("Would you like to include lower case letters in your password?")
  var promptUpperCase = window.confirm("Would you like to include upper case letters in your password?")
  var promptSpecialCharacters = window.confirm("Would you like to include special characters in your password?")
  var promptNumbers = window.confirm("Would you like to include numbers in your password?")
    if (promptLowerCase === false && promptUpperCase === false && promptNumbers === false && promptSpecialCharacters === false) {
      window.alert("You must select at least one character type.")
      return
  }
  function display() {
    displayPassword.textContent = result;
  }
  if (promptLowerCase === true) {
    var math1 = Math.floor(Math.random() * lowerCase.length);
    result += lowerCase[math1];
    allCharacters = allCharacters.concat(lowerCase);
  }
  if (promptUpperCase === true) {
    var math2 = Math.floor(Math.random() * upperCase.length);
    result += upperCase[math2];
    allCharacters = allCharacters.concat(upperCase);
  }
  if (promptSpecialCharacters === true) {
    var math3 = Math.floor(Math.random() * specialCharacters.length);
    result += specialCharacters[math3];
    allCharacters = allCharacters.concat(specialCharacters);
  }
  if (promptNumbers === true) {
    var math4 = Math.floor(Math.random() * numbers.length);
    result += numbers[math4];
    allCharacters = allCharacters.concat(numbers);
  }
  console.log(result);
  for (let i = result.length; i < prompt; i++) {
    var math2 = Math.floor(Math.random() * allCharacters.length);
    result += allCharacters[math2];
  }
  display()

}
// if (promptSpecialCharacters === true && promptNumbers === true && promptUpperCase === true) {
//   //for (let i = 0; i < prompt; i++) {
//   var math1 = Math.floor(Math.random() * allCharacters.length);
//   result += allCharacters[math1];
//   //}
// }
// if (promptSpecialCharacters === false && promptNumbers === true && promptUpperCase === true) {
//   //for (let i = 0; i < prompt; i++) {
//   var math2 = Math.floor(Math.random() * allNumbersAndUpperCase.length);
//   result += allNumbersAndUpperCase[math2];
//   //}
// }
// if (promptSpecialCharacters === true && promptNumbers === false && promptUpperCase === true) {
//   //for (let i = 0; i < prompt; i++) {
//   var math3 = Math.floor(Math.random() * allSpecialCharactersAndUpperCase.length);
//   result += allSpecialCharactersAndUpperCase[math3];
//   //}
// }
// if (promptSpecialCharacters === true && promptNumbers === true && promptUpperCase === false) {
//   //for (let i = 0; i < prompt; i++) {
//   var math4 = Math.floor(Math.random() * allSpecialCharactersAndNumbers.length);
//   result += allSpecialCharactersAndNumbers[math4];
//   //}
// }
// if (promptSpecialCharacters === false && promptNumbers === true && promptUpperCase === false) {
//   //for (let i = 0; i < prompt; i++) {
//   var math5 = Math.floor(Math.random() * allNumbers.length);
//   result += allNumbers[math5];
//   //}
// }
// if (promptSpecialCharacters === false && promptNumbers === false && promptUpperCase === true) {
//   //for (let i = 0; i < prompt; i++) {
//   var math6 = Math.floor(Math.random() * allLetters.length);
//   result += allLetters[math6];
//   //}
// }
// if (promptSpecialCharacters === true && promptNumbers === false && promptUpperCase === false) {
//   //for (let i = 0; i < prompt; i++) {
//   var math7 = Math.floor(Math.random() * allSpecialCharacters.length);
//   result += allSpecialCharacters[math7];
//   //}
// }
// if (promptSpecialCharacters === false && promptNumbers === false && promptUpperCase === false) {
//   //for (let i = 0; i < prompt; i++) {
//   var math8 = Math.floor(Math.random() * lowerCase.length);
//   result += lowerCase[math8];
//   //}
// }



