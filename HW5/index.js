//Review
//-Why should we use functions at all?-We can reuse code: Define the code once, and use it many times.

//-How to define/declare a function?- Let namefunction = (parameter1, parameter2, parameter3) =>{code to be executed}

//-How to call/use a function?- namefunction(value/function)

//-What is return, why and how do we use it?-When JavaScript reaches a return statement, the function will stop executing.
//Functions often compute a return value. The return value is "returned" back to the "caller"

//Do we have to use return in every function?-No

//What are function arguments/parameters, why and how we use it? //Function parameters are listed inside the parentheses () in the function definition.
//Function arguments are the values received by the function when it is invoked.
//Inside the function, the arguments (the parameters) behave as local variables.

//How to use function from a different file other than our currently working file? 
//The function could be called as if it was in the same JS File as long as the file containing the definition of the function has been loaded before the first use of the function. (chắc vậy ...)

//Ex1
console.log(calc(1,2,"+"))

let hello = () => {
    for (i = 0; i < 3; i++){
        console.log("Hello world");
    }
}
    hello();


//Ex2
let sum = (x, y) => {
    let result = x + y;
    console.log(result);
}

sum(10, 20);


//Ex3. draw square
// let drawSquare= (lenght,clr) =>
// {
//   color(clr);
//   for(i=0;i<4;i++)
//   {
//   fd(lenght);
//   rt(90);
//   }
// }

// drawSquare(150,"green");

//Ex4.
// for (let i = 0; i  < 30; i ++){
//     drawSquare(i * 5, 'red')
// lt(17)
// penup()
//     forward(i * 2)
//     pendown()
// }

//==> a cyclone of square


//Ex5.
// let draw_star = (length) =>
// {
//   rt(18);
//   for(i=0;i<5;i++)
//   {
//     fd(length);
//     rt(144);
//   }
// }
// draw_star(200);

//Ex6.
let remove_dollar_sign = (s) => {
    newStr = s.replace(/\$/g, "");  // Dùng dấu \ để read kí tự đặc biệt
    return newStr;
}

//Ex7.
string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up") {
    console.log("Your function is correct")
}
else {
    console.log("Oops, there's a bug")
}


//Ex8.

let get_even_list = (l) => {
    let List = [];
    for (i = 0; i < l.length; i++) {
        if (l[i] % 2 == 0) {
            List.push(l[i]);
        }
    }
    return List;
}

//Ex9.
even_list = get_even_list([1, 2, 5, 9, -10, 6])
console.log(even_list);
if (even_list == [2, -10, 6]) {
    console.log("Your function is correct");
}
else {
    console.log("Ooops, bugs detected");
}

//Ex10.
let is_inside = ([x,y],[ox,oy,a,b]) =>
{
    if(x>=ox && y>=oy && x<=(ox+a) && y<=(oy+b))
    {
       return true;
    }
    else
    {
      return false;
    }
}
console.log(is_inside([100, 120], [140, 60, 100, 200])); //return False
console.log(is_inside([200, 60], [140, 60, 100, 200]));   //return True


//Ex11.
let x=is_inside([150,80],[140,50,60,90])
if(x==true)
{
    console.log("Your function is correct");
}
else
{
    console.log("Ooops, bugs detected");
}