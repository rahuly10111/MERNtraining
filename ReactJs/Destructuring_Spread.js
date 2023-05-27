//console.log("Hello")
//Destructuring
// let array=[2,3,4]
// let [a,b,c]=array
// console.log(a,b,c)   2 3 4


// let array=[2,3,4,5]
// let [a,b,c]=array
// console.log(a,b,c)   2 3 4


// let array=[2,3,4,6]
// let [a,b,c,d,e]=array
// console.log(a,b,c,d,e)        -->> error e is not inti.


// let array=[2,3,4,6,7,9,4,5]
// let [a,b,c,d,e, ...rest]=array
// console.log(a,b,c,d,e,rest)     -->>   2 3 4 6 7 [9 4 5]


// let array=[2,3,4,6,7,9,4,5]
// let [a,,,,, ...rest]=array
// console.log(a,rest)     -->>   2 [9 4 5]


// let {a,b}={a:1, b:5}
// console.log(a,b)       -->> 1 5

// spread 
// let arr1=[2,5,8,4]
// let obj1={...arr1}
// console.log(obj1)        -->> {0: 2, 1: 5, 2: 8, 3: 4}


// let arr2 = [2, 5, 8, 4]
// function sum(a1, a2, a3, a4) {
//     return (a1 + a2 + a3 + a4)
// }
// console.log(sum(...arr2))        -->> 19


let obj = {
    name: "Sam", age: 21, favColor: "Yellow"
}
// console.log({ ...obj, name: "Ram" })         -->> {name: 'Ram', age: 21, favColor: 'Yellow'}

// console.log({ ...obj, name: "Ram", age: 28 })   -->> {name: 'Ram', age: 28, favColor: 'Yellow'}

// console.log({ name: "Ram", ...obj })    -->> {name: 'Sam', age: 21, favColor: 'Yellow'}