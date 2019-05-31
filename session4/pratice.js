let word = {
    ngta:"Người ta",
    hc :"Học",
    stt:"Status",
}
console.log(word);
while(1)
{
let input=prompt("Enter your code?");


if(word.hasOwnProperty(input))
{
    console.log(word[input]);
}
else{
  let upd=prompt("Do you want to update(Y/N):");
  if(upd.toLowerCase()==="y")
  {
    let newCode=prompt("Enter your translation:");
    word[input]= newCode;       //Ngoặc vuông để truyền property vào trong Obj
    console.log("Updated");
    console.log(word);
  }
  else{
      console.log("Bye bye");
  }

}
}
 
