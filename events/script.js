// Definition a addEventListener to the click event listener so that it can be called multiple times on the same click event object in the same window when multiple click events are fired simultaneously on the same click event object in different window in different window context and the click event listener is called multiple times on the same click event object. AddeventListener provide a event listener object.

let click = document.getElementById("owl");
// click.addEventListener('click', function(e){
//     // console.log(e);
//     alert('hello')
// });

// example of a event bubbling or propagation
// lower to upper event to activate event
// default value to false

// document.getElementById("images").addEventListener("click", function() {
//     console.log("image clicked");
//   },false);

// document.getElementById("owl").addEventListener("click", function () {
//   console.log("owl clicked");
// },false);



// event capturing 
// upper to lower

document.getElementById("images").addEventListener("click", function() {
    console.log("image clicked");
  },true);

document.getElementById("owl").addEventListener("click", function () {
  console.log("owl clicked");
},true);
