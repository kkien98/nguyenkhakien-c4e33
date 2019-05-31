let Emp=[
    {   
        name: "Duc",
        Salary: 50,
        Hours: 5,
        Days: 24,  
    },
    {   
        name: "Hung",
        Salary: 70,
        Hours: 4,
        Days: 27,  
    },
    {   
        name: "Kien",
        Salary: 80,
        Hours: 7,
        Days: 20,  
    },
];

let total=0;
console.log(Emp);
// for(i=0;i<Emp.length;i++)
// {
//     let x=Emp[i].Salary*Emp[i].Hours*Emp[i].Days;
//     console.log(`Lương của ${Emp[i].name} là ${x}`);
//     total+=x;
// }

Emp.forEach((person,index)=>{let monthSalary=person.Salary*person.Hours*person.Days;
console.log(`Lương tháng của ${person.name} là ${monthSalary}`);
total+=monthSalary}
)



console.log(Emp);

 console.log(`Tổng lương tháng của 3 người là ${total}`);
