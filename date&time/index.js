// 1 jan 1970
// let myDate = new Date();
// console.log(myDate); 2023-10-28T02:08:48.713Z
// console.log(myDate.toString()); Sat Oct 28 2023 07:43:20 GMT+0530 (India Standard Time) 
// console.log(myDate.toDateString()); Sat Oct 28 2023 
// console.log(myDate.toLocaleString()); 10/28/2023, 7:44:22 AM 
// console.log(typeof myDate); Object

// let myDateCreated = new Date(2023,0,23);  year, month, day
// console.log(myDateCreated.toDateString()); Mon Jan 23 2023

// let myDateCreated = new Date("2023-01-13"); 
// console.log(myDateCreated.toLocaleString());  1/13/2023, 5:30:00 AM

// let myDateCreated = new Date("01-11-2023"); 
// console.log(myDateCreated.toLocaleString());

// let myTimestamp = Date.now();
// let myDateCreated = new Date("01-11-2023");
// console.log(myTimestamp);
// console.log(myDateCreated.getTime());
// console.log(myTimestamp == myDateCreated)

// console.log(Math.floor(Date.now()/1000)); To provide a millesecond time to second  

// if we convert small unit to big unit like ms to second then we have to divide 
//  if you are converting from a larger unit to a smaller unit, you multiply by 60, and if you are converting from a smaller unit to a larger unit, you divide by 60.

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getYear());
