let foods =["Com","Pho","Ghe","Rau","Chao"];

 console.log(foods);

let del=prompt("Bạn có muốn xóa ko?(Y/N)");
if(del.toLowerCase()==="n")
{
    console.log("Bye Bye");
}
else if(del.toUpperCase()==="Y")
{
    let choice = prompt("Bạn muốn xóa theo vị trí(1)hay giá trị(2)?");
    if (choice === "1") {
        let delValue = Number(prompt("Vị trí bạn muốn xóa:"));
        if (delValue < 1 || delValue > foods.length) {
            console.log("Vị trí không tồn tại");
        }
        else {


            let delNumb = Number(prompt("Số lượng bạn muốn xóa:"));
            foods.splice(delValue - 1, delNumb);
            console.log("Xóa thành công")
            console.log(foods);
        }
    }
    else if(choice==="2")
    {
        let delChar=prompt("Giá trị bạn muốn xóa");
        let indexDelete =foods.indexOf(delChar);
        let delNumb=Number(prompt("Số lượng bạn muốn xóa:"));
        foods.splice(indexDelete,delNumb);
        console.log("Xóa thành công")
        console.log(foods);
    }
    else
    console.log("Giá trị ko phù hợp")
 
}
else
{
    console.log("Không hợp lệ");
}

