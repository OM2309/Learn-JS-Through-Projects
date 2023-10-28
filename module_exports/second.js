let a = 9;
let b = 10;
let c = 12;
function test() {
  console.log(a, b);
  return 1;
}
// exports = {}

// exports.test = test
// exports.a1 = a
// exports.b = b
/*

exports = {

    test: test,
    a1: a,
    b: b
}



// exports= {
//     a,
//     b,
//     test
// }

exports = 4

exports = {
    test,
    a1: a,
    b
}
*/

// module.exports = c
// module.exports = 4
module.exports = {
  test,
  a1: a,
  b,
};
