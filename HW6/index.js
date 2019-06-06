//Ex1
let href=document.getElementById("demo-a").getAttribute("href")  //hoặc .href luôn cx đc;
let btnGet=document.getElementById("btn-demo");
let input=document.getElementById("demo-input");
let btnRemove=document.getElementById("btnRemove");
let colorItem=document.getElementById("color");
let myTable=document.getElementById("table");
let btnUpd=document.getElementById("updBtn");


btnGet.addEventListener("click",()=>{
    input.value += href;
})


//Ex2
btnRemove.addEventListener("click",()=>{
    colorItem.options[colorItem.selectedIndex].remove();     //lấy index của selected item rồi remove
})

//Ex3
btnUpd.addEventListener("click",()=>changeContent());

let changeContent=(r,c,con)=>{
   r=Number(prompt("Input ROW number (1,2,3):"));
   c=Number(prompt("Input COLUMN number (1,2):"));
   con=prompt("Input new content:");
//    let x=document.getElementById("table").rows[r].cells;
//    x[c].innerHTML=con;
   myTable.rows[r-1].cells[c-1].innerHTML=con;
}
