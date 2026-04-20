// let array  =[1,2,33,4,5];
// array[1] = 222;                     // arrays are mutable
// console.log(array.length);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(typeof array)


/////// Arrays Method ///////////////////////

// Method no 1.toString();
// let arr = [1,2,3,"umar"];
// console.log(arr.toString());
// console.log(typeof arr)
// console.log(Array.isArray(arr))

///// // Method no 2. join()

// let arr  =[1,2,3,4,5];
// console.log(arr.join(""))    // arr.join("xyz")   you can add anything like 1 or 3 or d and etc345

///// // Method no 3. pop();
// let arr = [1,2,3,4,5,6,7];
// console.log(arr.pop());
// console.log(arr)

///// // Method no 4. push()
// let arr =[1,2,3,4,5];
// console.log(arr.push("umar"));
// console.log(arr);

///// // Method no 5.
// let arr = [1,2,3,4,5];
// console.log(arr.shift());
// console.log(arr);

///// // Method no 6. unshift()
// let arr = [1,2,3,4,5];
// console.log(arr.unshift("nangyal"));
// console.log(arr);
///// // Method no 7. delete
// let arr = [1,2,3,4,5];
// delete arr[1];
// console.log(arr);
///// // Method no 8. concat()
// let arr1= [1,2,3,4,5];
// let arr2 = [11,22,23,9,6];
// let arr3 = ["c","f","d","s","a"];
// console.log(arr1.concat(arr2,arr3));
// console.log(arr1);
///// // Method no 9. sort()
// let arr = [4,5,6, 1,2,3,];
// console.log(arr.sort());
// console.log(arr);
///// // Method no 10. splice()
// let arr = [4,5,6, 1,2,3,];
// console.log(arr.splice(0 ,1,2,9));
// console.log(arr);
///// // Method no 11. slice()
// let arr = [1,2,,3,4];
// console.log(arr.slice(2));
// console.log(arr);
///// // Method no 12. revers()
// let arr = [4,3,2,1];
// console.log(arr.reverse());
// console.log(arr);


///////////// looping through Arrays ///////////////////////
// let arr = [12,34,12,1,2]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
// }


// arr.forEach((value , index,arr) => {
//     console.log(value ,index,arr );
// });

// let obj ={
//     a:1,
//     b:2,
//     c:3
// }

// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
    
//     const element = obj[key];
//     console.log(element)
    
    
// }

// for (const element of arr) {
//     console.log(element)
// }

// let arr =[1,13,5,7,11];

// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element*2)
// }
// console.log(newArr);

// let newArr = arr.map((element,index,arrays)=>{
//     return element*2
// })
// console.log(newArr)

// const greaterThanSeven =((e) =>{
// if(e>7){
//     return true
// }
// return false
// })

// console.log(arr.filter(greaterThanSeven))

// let arr2 = [1,2,3,4,5,6];

// const red = (a,b)=>{
//     return a*b
// }
// console.log(arr2.reduce(red))

// console.log(Array.from("umar"));


// let input = prompt("Enter a number");

// let arr = [1,2,3,4]
// let newArr = []
// for (let index = 0; index < prompt.length; index++) {
//     const element = prompt[index];
//     newArr.push(element*2)
// }
// console.log(newArr);
// let input;
// let a =[1,2,3,4];
// do{
// input = prompt("Enter a number")
// a.push(input)}
// while(input!= '');
// a.pop()
// console.log(a);


