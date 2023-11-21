const myArr=[0,1,3,4,5];
const myArr2=["Ven","Pratap"];

const myArr3=new Array(1,2,3,4);
console.log(myArr[2]);

myArr.push(6);
myArr.push(10);
myArr.unshift(0);
myArr.shift()
myArr.includes(9);
myArr.indexOf(3);
const newArr=myArr.join();//newArr converted to string

//slice and Splice

const myn1=myArr.slice(1,3);
console.log(myn1);
// The splice() method is used to change the contents of 
// an array by removing or replacing existing elements and/or
//  adding new elements in place. It modifies the original array.
const myn2=myArr.splice(1,3);
console.log(myn2);