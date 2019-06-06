let h1 = document.getElementById("dom-h1");
console.dir(h1);
h1.innerText ="haha";

let newFood= `<li>Phở</li>`;
let menu=document.getElementById("menu");
console.dir(menu);

menu.innerHTML += newFood;

let h2= document.getElementById("dom-h2");
h2.remove();

let btnDemo=document.getElementById("btnDemo");

btnDemo.addEventListener("click",()=>{
    btnDemo.innerText = "u just clicked"
    console.log("u just clicked");
})

let foodInput=document.getElementById("domInput");
console.dir(foodInput);
foodInput.addEventListener("keyup", ()=>{
    console.log(foodInput.value);
})
