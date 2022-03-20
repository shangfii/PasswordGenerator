// Variables to be used in our password prompt collection function
 var passLength = 8;
 var choice = [];
 
 // Array of cases to chose from (lowercase, uppercase letters and numbers and special characters)
 var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]
 var Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ]
 var number= [1,2,3,4,5,6,7,8,9,0]
 var specCharacter = [' ', '!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[', ' \ ' ,']','^','_','`','{','|','}','~']
 
 // Assignment Code
 var generateBtn = document.querySelector("#generate");
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 
 // Write password to the #password input
 function writePassword() {
   choice=[]
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
   passLength = parseInt(prompt("Chose a Password length between 8-128 characters.\n Please enter your value below. "));
 
   if (isNaN(passLength) || passLength <8 || passLength > 128) {
     alert("Invalide input! .\n Please try again; Enter a numeric value between 8-128. ");
     return false;
   }
    
//  Now we decide what kind of characters we want using confirm and if/else statements
// if true we will select a random character from the specified variable
   if (confirm("Great, would your password contain lowercase letters?")){
     choice = choice.concat(lowercase);
   }
  //  if false(cancel selection) then it will return nothing
   else if (choice) {
  } 
  else {
    (choice)
    return false;
  }
   
   if (confirm("Got it, would you likek to include Upppercase letters?")){
     choice = choice.concat(Uppercase);
   }
   else if (choice){
   }
   else{ (choice)
    return false;
  
   }
 
   if (confirm("Noted: Added some numeric (Numbers) character?")){
       choice = choice.concat(number);
     }
     else if (choice){
     }
    else{ (choice)
      return false;
    }

 
  if (confirm(" Special Characters inscrease security;  would you like to include any special characters?")){
         choice = choice.concat(specCharacter);
      }
      else if (choice){
      }
     else{ (choice)
      return false;}
 
       return true; 
     }
