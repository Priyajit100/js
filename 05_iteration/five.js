
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
// let x={
//     name:"Hello"
// }
// for(let v in x){
//     console.log(x[v])
// }
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
let x=[[1,8],5,6]
let y=x.flat(Infinity)
//console.log(y)
// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )
// let x=[1,8]
// let r=1;
// x.forEach((item)=>{
// r=r*item
// console.log(r)
// })
// const nested = [[1], [2, 3], [4]];

// const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flat); 
// [1, 2, 3, 4]

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});