// // Dates

 let myDate = new Date()
  //console.log(myDate.toString());
  //console.log(myDate.toDateString());
 //console.log(myDate.toLocaleString());
 //console.log(typeof myDate);

 let myCreatedDate = new Date(2024, 0, 24)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
 //let myCreatedDate = new Date("2023-01-14")
 // let myCreatedDate = new Date("01-14-2023")
 //console.log(myCreatedDate.toDateString());

 let myTimeStamp = Date.now()

console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()

 //console.log(newDate.getMonth() + 1);
 //console.log(newDate.getDay());

// // `${newDate.getDay()} and the time `

 let x= newDate.toLocaleString('default', {
     weekday: "long",
    
 })
 

// Extract day, month, and year
let day = String(newDate.getDate()).padStart(2, '0');
let month = String(newDate.getMonth() + 1).padStart(2, '0'); 
let year = newDate.getFullYear();

// Format as dd/mm/yyyy
let formattedDate = `${day}/${month}/${year}`;

console.log(formattedDate);
console.log(x);