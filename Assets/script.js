// Variables to be used in our password prompt collection function
var passLength = 10;
var choiceList = [];

// List of all variables to chose from 

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]
var Uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ]
var number = [1,2,3,4,5,6,7,8,9,0]
var specCharacter = [' ', '!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[', ' \ ' ,']','^','_','`','{','|','}','~']

// Assignment this Code to the document

var generateBtn = document.querySelector("#generate");

// Add event listener to generate password button

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  choice =[]
  var correctPrompts= collectPrompts();
  if(correctPrompts) {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
 
 } 

else{
    passwordText.value="";
  }
}

// Generate password function
function generatePassword() {
  console.log(choice);

  // generates according to prompts selected 

  var password= "";
  for(var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password+choice[randomIndex]; 
  }
  return password;
  
}

// Creating a prompt allowing us to choose our character amount.

  function collectPrompts() {
  passLength = parseInt(prompt("Your Password must be between 8-128 characters.\n Enter the number of characters "));

  if (isNaN(passLength) || passLength <8 || passLength > 128) {
    alert(" Your Password must be between 8-128 characters.\n Enter the number of characters  ");
    return false;
  }
//   characters confirmation and if/else statements
// if true we will select a random character from the specified variable

  if (confirm("Great! Should Password include lowercase letters?")){
    choice = choice.concat(lowercase);
  }
 //  if false(cancel selection) then it will return nothing

  else if (choiceArr) {
 } 
 else {
   (choiceArr)
   return false;
 }
  
  if (confirm("Cool!. Include Upppercase letters?")){
    choice = choice.concat(Uppercase);
  }
  else if (choiceArr){
  }
  else{ (choiceArr)
   return false;
 
  }

  if (confirm("Perfect!. Should therw be numbers?")){
      choice = choice.concat(number);
    }
    else if (choice){
    }
   else{ (choice)
     return false;
   }


 if (confirm("Lastly!, winclude characters?")){
        choice = choice.concat(specCharacter);
     }
     else if (choice){
     }
    else{ (choice)
     return false;}

      return true; 
    }