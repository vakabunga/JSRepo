console.log ('Логический тип и ветвление');
console.log ('Задача №1');
let user = 'q', balance = 1000;
if (user === 'admin') {
  console.log('Администратор');
} else if (user === '') {
  console.log('Гость');
} else if (balance >= 1000 && balance < 5000) {
  console.log('Постоянный покупатель');
} else if (balance >= 5000) {
  console.log('VIP-клиент');
}
console.log();

console.log('Задача №2');
user = 'admin';
let orderOwner = 'netfologist';
if (user === orderOwner || user === 'admin') {
  console.log('Редактирование разрешено');
} else console.log('Заказ нельзя редактировать');
console.log();

console.log('Задача №3');
let orderAmount, purchaseNumber, standartFee, vipFee, extraFee, totalFee;
balance = 1000;
orderAmount = 3000;
purchaseNumber = 0;
standartFee = 10;
vipFee = 20;
extraFee = 5;
if (balance >= 5000) {
  totalFee = vipFee;
} else totalFee = standartFee;
if (purchaseNumber > 0) {
  totalFee += extraFee;
}
console.log('Вам начислено ' + totalFee + '% от покупки в виде бонусов')