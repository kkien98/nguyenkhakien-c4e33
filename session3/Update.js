let foods =["Com","Pho","Ghe","Rau","Chao"];

 console.log(foods);

let upd=prompt("Bạn có muốn update ko?(Y/N)");
if(upd.toLowerCase()==="n") //Convert tat ca chu nhap vao thanh chu IN THUONG
{
    console.log("Bye Bye");
}
else if(upd.toUpperCase()==="Y") //convert tat ca chu nhap vao thanh chu IN HOA
{
 let i=Number(prompt("Vị trí bạn muốn update(1,2,...): "));
 if(i<1 || i>foods.length)
 {
     console.log("Vị trí không tồn tại");
 }
 else {
 let newFood=prompt("Giá trị từ mới:");
//  foods[i-1]=newFood;
 foods.splice(i-1,1,newFood);     //splice(Vị trí,0 là insert-1 là replace giá trị,tên giá tri)
 console.log("Update thành công");
 foods.forEach((food,i)=>{
    console.log(`${i+1}.${food}`);
})
 }
}
else
{
    console.log("Không hợp lệ");
}

