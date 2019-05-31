//A nested list is a list that appears as an element in another list. Example: nested = ["hello", 2.0, 5, [10, 20]]
//Can a list store both integers and strings in it? -YES !!!!!!!

//Ex1
let inventory = {
    gold: 500,
    pouch: ['flint', 'twine', 'gemstone'],
    backpack: ['xylophone', 'dagger', 'bedroll', 'bread loaf']
}

//add key
inventory.pocket = ["seashell", "strange berry", "lint"];

//remove a value

let x = inventory.backpack.indexOf("dagger");
inventory.backpack.splice(x, 1);
console.log(inventory);

//Add 50 to gold
inventory.gold += 50;


//Ex2
let prices = {
    banana: 4,
    apple: 2,
    orange: 1.5,
    pear: 3
}

let stock = {
    banana: 6,
    apple: 0,
    orange: 32,
    pear: 15
}


let keyName=Object.getOwnPropertyNames(prices);  //lấy từng tên của các property trả về 1 array
let price=Object.values(prices);                 //Lấy value của các property trong Obj trả về 1 array
let count=Object.values(stock);                  //Lấy value của các property trong Obj trả về 1 array
for(i=0;i<Object.keys(keyName).length;i++)
{
console.log(keyName[i]);
console.log(`price: ${price[i]}`);
console.log(`stock: ${count[i]}`);
}

//total money
let total=0;
for(i=0;i<Object.keys(price).length;i++)
{
    total+=price[i]*count[i];
}
console.log(`Total money if sold all the fruits is : ${total}`);
