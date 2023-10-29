// const coding = ["js", "css", "HTML", "C"];

// coding.forEach( (item) => {
// console.log(item);
// });

// const values = coding.forEach( (item) => {    // Foreach does not store the value on variable
// console.log(item);
// });

// const values1 = coding.map((item)=>{  // map store the value
//     console.log(item);
// })

// console.log(values1)

// const newNums = [];

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

// myNums.forEach( (num) => {
//      if(num > 4){
//         newNums.push(num)
//      }
// })

// console.log(newNums)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
// const newValues = myNums.filter((num) => {
//     return num % 2 === 0
// })

// console.log(newValues)

// const books = [
//   { author: "Chinua Achebe", country: "Nigeria", title: "Things Fall Apart", year: 1958, },
//   { author: "Hans Christian Andersen", country: "Denmark", title: "Fairy tales", year: 1836, },
//   { author: "Dante Alighieri", country: "Italy",  title: "The Divine Comedy",  year: 1315, },
//   { author: "Unknown", country: "Sumer and Akkadian Empire", title: "The Epic Of Gilgamesh", year: -1700,},
//   { author: "Unknown", country: "Achaemenid Empire", title: "The Book Of Job", year: -600, }
// ];

// const userBooks = books.filter( (book) => {
//     return book.year > 1315;
// })

// const userBooks = books.filter( (book) => {
//     return book.year > 1315 && book.country == "Denmark";
// })

// console.log(userBooks)

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumbers.map( (num) => {
//     return num + 10
// })

// console.log(newNums)

// const newNums = myNumbers
//   .map((num) => {
//     return num * 10;
//   })
//   .map((num1) => {
//     return num1 + 1;
//   }).filter((num2) => {
//     return num2 > 50;
//   });

//   console.log(newNums);

const myNums = [1, 2, 3, 4];

const initialValues = 5;

const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`The value of acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, initialValues);

console.log(myTotal);
