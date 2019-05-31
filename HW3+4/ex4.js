//Ex4
//4.1
let sizes = [5, 7, 300, 90, 24, 50, 75];
console.log(`Hello these are my ship sizes : \n${sizes} `);

//4.2
let biggest = 0;

for (i = 0; i < sizes.length; i++) {
    if (biggest <= sizes[i]) {
        biggest = sizes[i];
    }
}
console.log(`Now my biggest sheep has size ${biggest} let's shear it`);

//4.3
// sizes[sizes.indexOf(biggest)] = 8;
// console.log(`After shearing, these are my ship sizes : \n${sizes}`);

//4.4
// for (i = 0; i < sizes.length; i++) {
//     sizes[i] += 50;
// }
// console.log(`One month passed,here are my ship sizes : \n${sizes} `);

//4.5
for (j = 0; j< 3; j++) {
    console.log(`\nMonth ${j+1} :`)
    for (i = 0; i < sizes.length; i++) {
        sizes[i] += 50;       
    }
    console.log(`One month has passed,here are my ship sizes : \n${sizes} `);

    let biggest = 0;

    for (i = 0; i < sizes.length; i++) {
        if (biggest <= sizes[i]) {
            biggest = sizes[i]; 
        }
    }
    console.log(`Now my biggest sheep has size ${biggest} let's shear it`);
    sizes[sizes.indexOf(biggest)] = 8;
    console.log(`After shearing, these are my ship sizes : \n${sizes}`);
}

//4.6
let total=0;
for (i = 0; i < sizes.length; i++) {
    total+=sizes[i];
}
console.log(`My flock has size in total: ${total} \nI would get  ${total} * $2 = ${total*2}$`);
