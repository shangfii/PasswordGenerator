// Variables to be used in our password prompt collection function
 var passwordLength = 8;
 var choice = [];
 
 // Arrys of choices : lowercase, and uppercase letters, numbers, and special characters.

 var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]
 var Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ]
 var number = [1,2,3,4,5,6,7,8,9,0]
 var specCharacter = [' ', '!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[', ' \ ' ,']','^','_','`','{','|','}','~']
 
 // Assignment Code
 var generateBtn = document.querySelector("#generate");
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 
 // Write password to the #password input

 function writePassword() {
   choiceArr=[]
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
   for(var i = 0; i < passwordLength; i++) {
     var randomIndex = Math.floor(Math.random() * choice.length);
     password = password+choice[randomIndex]; 
   }
   return password;
   
 }
 
 // Creating a prompt allowing us to choose our character amount.
   function collectPrompts() {
   passwordLength = parseInt(prompt("Password length can be between 8-128 characters.\n Please choose wisely. "));
 
   if (isNaN(passLength) || passLength <8 || passLength > 128) {
     alert("You have created the password of DOOM.\n Please retry i'm begging you. Enter a numeric value between 8-128. ");
     return false;
   }
//  Now we decide what kind of characters we want using confirm and if/else statements
// if true we will select a random character from the specified variable
   if (confirm("Marvelous. Shall this password contain lowercase letters?")){
     choice = choice.concat(lowercase);
   }
  //  if false(cancel selection) then it will return nothing
   else if (choice) {
  } 
  else {
    (choice)
    return false;
  }
   
   if (confirm("Alright then. Any Upppercase letters?")){
     choice = choice.concat(UppercaseArr);
   }
   else if (choice){
   }
   else{ (choice)
    return false;
  
   }
 
   if (confirm("Can do. How about numbers?")){
       choiceArr = choice.concat(number);
     }
     else if (choice){
     }
    else{ (choice)
      return false;
    }

 
  if (confirm("And finally, would you like any special characters?")){
         choiceArr = choice.concat(specCharacter);
      }
      else if (choice){
      }
     else{ (choice)
      return false;}
 
       return true; 
     }
