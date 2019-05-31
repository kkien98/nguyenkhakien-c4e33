//array(mang)

let foods =["Com","Pho","Ghe","Rau","Chao"];

//index (vi tri)
console.log(foods[0]);

//length of array
console.log(foods.length);

//1.Create
let newFood="Ca";
foods.push(newFood);
console.log(foods);
//Search add item by index


//2.Read
//2.1 Read One
console.log(foods[3]);

//2.2 Read Many
console.log(foods);
//cach 1
for(let i=0;i<foods.length;i++)
{
    let food = foods[i];
    console.log(`${i+1}.${food}`); //backticks    
}

//cach 2
foods.forEach((food,i)=>{
    console.log(`${i+1}.${food}`);
})


//3.Update
foods[1]= "Bun"


//4.Delete
//4.1 Delete by index
foods.splice(1,1);     //splice(vi tri muon xoa,so phan tu xoa)
console.log(foods);

foods.splice(1,3);
console.log(foods);

//4.2 Delete by value

let ValueDelete = "Rau";
let indexDelete =foods.indexOf(ValueDelete)
console.log(indexDelete);
foods.splice(indexDelete,1);
console.log(foods);