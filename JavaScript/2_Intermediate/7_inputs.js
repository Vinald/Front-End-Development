// prompt

let food = prompt('How much is the food?');
console.log(food);
console.log(typeof(food));

food = alert('How much is your food?');
console.log(food);

tip = prompt('How much is the tip?');
console.log(typeof(tip));
console.log(tip);

food = Number(food);
tip = Number(tip);

let total = food + tip;
console.log(typeof(total));
console.log(total);

