
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "Indonesia")


// console.log(map);

// for (const [key, value] of map) {
//      console.log(key, ':-', value);
// }
for(const entry of map){
    console.log(entry)
}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// let x={
//     "name": "Hello",
//     "rollno":12345
// }

// console.log(typeof(x["name"]))
// let mysb=Symbol("xy")
// let y={
// [mysb]:12345
// }
// console.log(typeof(y[mysb]))
// for (const [key, value] of Object.entries(myObject)) {
//     console.log(key, ':-', value);
    
// }