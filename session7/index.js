//Bất đồng bộ
const context = {
  users: null,
};
// async / await         
window.onload = async () =>{  
    // const respone =await fetch('https://reqres.in/api/users');
    // const data=await respone.json();
    // const users=data.data;
   let x=await getData('https://reqres.in/api/users');

   
    // for(i=0;i<users.length;i++)
    // {
    // user.innerHTML+= `<li>${users[i].first_name} ${users[i].last_name}</li>`
    // 
    showName(x.data);
    console.log(x)
    let user=x.data;
    console.log(x.data[1].first_name);
   let firstName=document.getElementById("firstName");
   let lastName=document.getElementById("lastName");
   let email=document.getElementById("email");
   let ava=document.getElementById("ava");
   let listUser=document.getElementsByTagName("li");

   console.log(x.data[0].first_name);
   console.log(listUser);
   
//    x.array.forEach((user,index) => {
//        let eachUser= document.getElementById("user-${index}");
//        eachUser()
       
//    });


   
} 
let getData= async(link)=>{
    const respone =await fetch(link);
    const data=await respone.json();
    return data;
    //context.users = users;
}

let showName=(x)=>{
    // dùng context.user thay cho x;
    let user=document.getElementById("users")
    for(i=0;i<x.length;i++)
    {
    user.innerHTML+= `<li id="user-${i}">${x[i].first_name} ${x[i].last_name}</li>`
    }
}