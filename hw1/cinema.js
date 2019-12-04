/*Напишіть скрипт, який вирішує таку задачу: автоматизована система кінотеатру повинна визначати,
чи відвідувач може проходити у зал і переглядати фільми із обмеженням PG-13. Згідно з правилами, якщо комусь виповнилось
13 років – їм дозволено переглядати фільм. Якщо ж їм
не більше 13, але вони у супроводі дорослого – теж можуть подивитись фільм.
У іншому випадку перегляд недозволений. Використовуйте логічні оператори, поверніть як результат true або false​*/
 
let cinemaPass = function(age, isAdultHere) {
    if ((age >= 13) || (isAdultHere)) {
        isAllowed = true;
    } else {
        isAllowed = false;
  
    }
    return isAllowed;
 };
 console.log(cinemaPass(15, false)); //true expected
 console.log(cinemaPass(2, true)); //true expected
 console.log(cinemaPass(12, false)); //false expected
 