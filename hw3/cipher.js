/* Напишіть скрипт, який зашифровує послання шифром Цезаря​
У вас є шматок тексту «This is my text for hometask”​
Реалізуйте скрипт, який видозмінить цей рядок, застосувавши шифр Цезаря з кроком 2.​
Тип циклу обирайте на свій смак */
 
 
let text ="This is my text for hometask";
let cipheredText = "";
let step = 2;
let alphabet= "abcdefghijklmnopqrstuvwxyz";

 
for (let i=0;i<text.length;i++){
if(text.charAt(i)!=" "){
   let place = alphabet.indexOf(text.toLowerCase().charAt(i));
   let cipheredPlace = place+step;

  
   if(cipheredPlace>alphabet.length-1){
       cipheredPlace = cipheredPlace - alphabet.length;
   }
   cipheredText+=alphabet.charAt(cipheredPlace);
}
else{
    cipheredText+=" ";
}
}
console.log(cipheredText);
