// Array copy operation to create a shallow copy
// shallowCopy of an object is a copy whose properties share the same refrence
// DeepCopy of an object is a copy whose properties do not share the same refrence

// let myArray = [0,1,2,3,4,5];
// console.log(myArray)
// console.log(typeof myArray)
// console.log(typeof myArray.join());
// console.log(myArray)
// console.log(myArray.join()); to provide a string


// Slice and Splice operations

// let myArray = ['A','B','C','D','E','F'];
// console.log("A:" , myArray);

// const myArray1 = myArray.slice(0,2);
// console.log("B:" , myArray1);



//in splice method we change the orignal array 
// This method modifies the original array and returns the removed elements as a new array.
// const myArray2 = myArray.splice(0,2);  
// console.log("C:" , myArray2);
// console.log(myArray) 



// push and pop
const marvel_heros = ['thor','ironman','spiderman','doctor_strange','black_widow']  
const dc_heros = ['flash','superman','batman']
// marvel_heros.push(dc_heros) [ 'thor', 'ironman', 'spiderman', [ 'flash', 'superman', 'batman' ] ]
// console.log(marvel_heros)

// concat return the new array 
// const Allheros = marvel_heros.concat(dc_heros); [ 'thor', 'ironman', 'spiderman', 'flash', 'superman', 'batman' ]
// console.log(Allheros);

// spread operator
const all_new_heros = [...marvel_heros , ...dc_heros]
// const all_new_heros = {...marvel_heros , ...dc_heros}  all keys are unique in object thats why we replace the marvel heros in the same index

// {
//     '0': 'flash',
//     '1': 'superman',
//     '2': 'batman',
//     '3': 'doctor_strange',
//     '4': 'black_widow'
//   }

console.log(all_new_heros)


