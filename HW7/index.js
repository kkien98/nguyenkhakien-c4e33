window.onload = async () => {
    //    console.log( getData('http://dummy.restapiexample.com/api/v1/employees'));
    let emp_data = await getData('http://dummy.restapiexample.com/api/v1/employees');
    await showInfo(emp_data);
    // console.log(emp_data[1].employee_name)
    showSalary(emp_data);

}


let getData = async (link) => {
    const respone = await fetch(link);
    const data = await respone.json();
    return data;
}

let showInfo = (data) => {
    let emp_name = document.getElementById("emp_info");
    for (i = 0; i < data.length; i++) {
        emp_name.innerHTML += `<li id="emp-${i}">${data[i].employee_name}</li>`;
    }

}


let showSalary = (data) => {
    
    for (i = 0; i < data.length; i++) {
        console.log(data[i].employee_salary)
        let emp = document.getElementById(`emp-${i}`);
        let emp_salary = document.getElementById("emp_salary");
        emp.addEventListener("click", () => {
            console.log(data[i]);
            emp_salary.innerHTML = "";
            let empinfo=`<span>Salary : ${data[i].employee_salary}</span>`;
            emp_salary.innerHTML +=empinfo;

        })
    }
}
