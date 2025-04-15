
// Dates

let myDate =  new Date();

console.log(myDate.toString()); // Tue Apr 15 2025 12:32:35 GMT+0000 (Coordinated Universal Time)



console.log(myDate.toDateString()); // Tue Apr 15 2025



console.log(myDate.toISOString()); // 2025-04-15T12:34:07.139Z


console.log(myDate.toJSON()); // 2025-04-15T12:34:36.095Z

console.log(myDate.toLocaleDateString()); // 4/15/2025

console.log(myDate.toLocaleString()); // 4/15/2025, 12:35:25 PM

console.log(myDate.toLocaleTimeString()); // 12:35:50 PM

console.log(myDate.toTimeString());  // 12:36:27 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString());  // Tue, 15 Apr 2025 12:36:54 GMT

console.log(myDate.getTimezoneOffset()); // 0


let mycreatedDate = new Date(2025,3,15);

console.log(mycreatedDate.toDateString());   // Tue Apr 15 2025


let myTimeStamp = Date.now();

console.log(myTimeStamp);


let newDate  =  new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());





