// number=> 2 to power 53
// bigint 
// string 
// boolean=> true/false  
// null=> standalone value 
// undefined=> value not assigned
// symbol=>unique
// console.log(typeof null);
// console.log(typeof undefined);
// let myObj = {
//     data: [1, 2, 3],
//     [Symbol.iterator]() {
//       let i = 0;
//       let data = this.data;
//       return {
//         next() {
//           return i < data.length
//             ? { value: data[i++], done: false }
//             : { done: true };
//         }
//       };
//     }
//   };
  

//   let iterator = myObj[Symbol.iterator]();
  
//   for (let result = iterator.next(); !result.done; result = iterator.next()) {
//     console.log("Value:", result.value, "Done:", result.done);
//   }