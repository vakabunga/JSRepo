console.log("Задача №1")
let userName = "LeoTolstoy", bonusBalance = 131;
console.log("Пользователь: " + userName);
console.log("Баланс: " + bonusBalance);
console.log();
console.log("Задача №2")
bonusBalance += 50 * 5;
bonusBalance -= 10 * 3;
//Альтернативное решение
//let buyBonus =  50 * 5, lostBonus = 10 * 3;
//bonusBalance = bonusBalance + buyBonus - lostBonus;
console.log("Баланс через 10 дней: " + bonusBalance);
console.log();
console.log("Задача №3");
bonusBalance = 131;
bonusBalance = (bonusBalance - bonusBalance % 80) / 80;
console.log("Можно купить " + bonusBalance + " килограмм пастилы");