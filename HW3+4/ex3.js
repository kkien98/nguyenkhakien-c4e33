//Ex3
let products=["T-Shirt"," Sweater"];
while(1)
{
let input=prompt("Welcome to our shop, what do you want (C, R, U, D)?");
if(input.toLowerCase()==="r")
{
  console.log(`Our items : ${products}`);
}
else if(input.toLowerCase()==="c")
{
    let create = prompt("Enter new item:");
    products.push(` ${create}`);
    console.log(`Our items : ${products}`);
}
else if(input.toLowerCase()==="u")
{
    let upd=Number(prompt("Update position?"));
    let updChar=prompt("New item?");
    products.splice(upd-1,1,` ${updChar}`);
    console.log(`Our items : ${products}`);
}
else if(input.toLowerCase()==="d")
{
    let del=Number(prompt("Delete position:"));
    products.splice(del-1,1);
    console.log(`Our items : ${products}`);
}
else{
    console.log("Please enter C,R,U,D only.");
}
}