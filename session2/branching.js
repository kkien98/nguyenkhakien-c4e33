// let x=Math.floor((Math.random() * 100) + 0);
// console.log(x);
// if(x<=30)
// {
//     console.log("Sunny");
// }
// else if(x<=70)
// {
//     console.log("Rainy");
// }
// else
// {
//     console.log("Cloudy");
// }

////Pt bậc 2
// let a=Number(prompt("Nhập số thứ 1: "));
// let b=Number(prompt("Nhập số thứ 2: "));
// let c=Number(prompt("Nhập số thứ 3: "));

// let delta=(b*b)-(4*a*c);

// if(delta<0)
// {
//     console.log("Phương trình vô nghiệm");
// }
// else if(delta===0)
// {
//     let x=-b/(2*a);
//     console.log(`Phương trình có nghiệm kép ${x}`);   //backticks
// }
// else
// {
//     let x1=(b+Math.sqrt(delta))/(2*a);
//     let x2=(-b-Math.sqrt(delta))/(2*a);
//     console.log(`Phương trình có 2 nghiệm phân biệt ${x1} và ${x2}`);
// }


// for(let i=1;i<=100;i++)
// {
//     if(i%2===0)
//     {
//         console.log(i);
//     }
// }

let userName="C4E33";
let pass="codethechange";

let input=prompt("Nhập username:");
//if(input === userName)
if(input.localeCompare(userName)==0)
{
    let EnterPass=prompt("Nhập password:");
    //if(EnterPass === pass)
    if(EnterPass.localeCompare(pass)==0)
    {
        console.log("Welcome");
    }
    else
    {
        console.log("Wrong password");
    }
}
else
{
    console.log("Username not found");
}