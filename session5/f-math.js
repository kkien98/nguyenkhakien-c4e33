window.onload = () =>{
    let numb1=Math.floor(Math.random() * 10); 
    let numb2=Math.floor(Math.random() * 10); 
    
    
    let op=["+","-","*","/"];
    let random= op[Math.floor(Math.random() * op.length)];
    console.log(random);
    
    let realResult= calc(numb1,numb2,random); //function calc tu cal.js
    
    let err=[-1,0,0,0,1]; // thêm số 0 cho tăng khả năng đúng
    let errIndex=Math.floor(Math.random()*err.length);
    let error=err[errIndex];
    // let arr=[realResult-1,realResult,realResult+1];
    // let randomResult=arr[Math.floor(Math.random() * arr.length)];
    let randomResult=realResult+error;
    console.log(`${numb1}${random}${numb2}=${randomResult}`);
    console.log(realResult);
    
    let reply=prompt("Y/N ?").toLowerCase();
    answer(realResult,randomResult,reply,"Đúng","Sai");
    
}
