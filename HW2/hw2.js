//Ex1
let x=Number(prompt("Enter your height(cm):"))/100;
let y=Number(prompt("Enter your weight(kg):"));

let bmi= y/(x*x);

console.log(`Your BMI = ${bmi}`);
if(bmi<16)
{
    console.log("Severely underweight");
}
else if( bmi <= 18.5)
{
    console.log("Underweight");
}
else if( bmi<=25)
{
    console.log("Normal");
}
else if( bmi<=30)
{
    console.log("Overweight");
}
else
{
    console.log("Obese");
}

//Ex2
let n=Number(prompt("Please enter a number:"));
let s=1;
for(i=1;i<=n;i++)
{
    s*=i;
}
console.log(`Factorial of ${n} is ${s}`);