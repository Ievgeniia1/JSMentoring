/* Напишіть скрипт, який залежно від значення змінної,
що містить назву пори року (winter, summer, spring, autumn),
виводитиме на екран фразу, яка описуватиме ваше ставлення до
тієї чи іншої пори року.
Якщо змінна містить не назву пори року – скрипт має видати повідомлення про те, що не знає такої пори року.​*/
 
 
/* First approach using swith-case */
let seasonDefinitionUsingSwitch = function(season) {
    let phrase;
    switch (season) {
        case "winter":
            phrase = "Time for skiing :-)";
            break;
        case "summer":
            phrase = "Nice weather";
            break;
        case "autumn":
            phrase = "Beautiful nature";
            break;
        case "spring":
            phrase = "Amazing time";
            break;
        default:
            phrase = "Sorry, do not know such season";
    }
    return phrase;
 };
  
  
 /* Second approach using if-else */
 let seasonDefinitionUsingIfElse = function(season) {
    let phrase;
    if (season === "winter") {
        phrase = "Time for skiing :-)";
    } else if (season === "summer") {
        phrase = "Nice weather";
    } else if (season === "autumn") {
        phrase = "Beautiful nature";
    } else if (season === "spring") {
        phrase = "Amazing time";
    } else {
        phrase = "Sorry, do not know such season";
    }
    return phrase;
 };
  
 console.log(seasonDefinitionUsingSwitch("winter"));
 console.log(seasonDefinitionUsingIfElse("summer"));
 