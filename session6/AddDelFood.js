let input=document.getElementById("Input");
let btnAdd=document.getElementById("btnAdd");
let btnDel=document.getElementById("btnDel");
let menu=document.getElementById("Menu");
// let listItems=document.getElementById("Menu").getElementsByTagName("li");      // Xóa lastItem
let listItems=document.getElementsByTagName("li");



btnAdd.addEventListener("click",()=>{

    // console.dir(input);
    menu.innerHTML += `<li>${input.value}</li>`;
})

console.log(listItems);

// btnDel.addEventListener("click",()=> removeItem())

// let removeItem= ()=>
// {
//     let lastItem= listItems[listItems.length-1];    //lastItem lấy từ vị trí cuối trong arr
//     lastItem.parentElement.removeChild(lastItem);  //parentNode also worked.
   
//    console.log(lastItem);
// }

// btnDel.addEventListener("click",()=>{
//    menu.lastElementChild.remove();
// })

//bài 3: xóa food theo input nhập vào

btnDel.addEventListener("click",()=> removeItem());        //click button event

let removeItem= ()=>
{   
for(i=0;i<listItems.length;i++)
{
    if(listItems[i].innerHTML===input.value)             //ko cần <li>${input.value}</li> vì listitem get by tag name("li") rồi
    {
           listItems[i].remove();   
           break;        //mỗi lần click CHỈ xóa 1 phần tử
    } 
}
}