// 1. getElementById
// const heading = document.getElementById('heading');
// console.log(heading);

// 2. getElementByTagName
// const heading = document.getElementsByTagName('h1');
// console.log(heading); 

// 3. getELementByClassName
// const heading = document.getElementsByClassName('heading');
// console.log(heading); 

// 4. querySelector
// const heading = document.querySelector('#heading');
// console.log(heading); 

// 5. querySelectorAll
// const heading = document.querySelectorAll('.heading');
// console.log(heading);




// Traverese DOM

// 1. parentNode
// const heading = document.getElementById('heading');
// const parent = heading.parentNode;
// console.log(parent);

// 2. childNodes
// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);

// 3. nextElementSibling
// const sibling = document.querySelector('.heading');
// console.log(sibling.nextElementSibling);

// 4. parentElementSibling
// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling);


// Mainipulation
// const heading = document.querySelector('.heading');
// heading.innerHTML = "Web Developer";
// heading.style.color = "purple";
// heading.classList.add("title");
// heading.classList.remove("title");


// Create Elements
// const heading = document.createElement('h1');
// heading.innerHTML = "Web Developer"
// heading.classList.add("title");
// console.log(heading);
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);

// const subHeading = document.createElement('h3'); 
// console.log(subHeading);
// subHeading.innerHTML = "Javascript";
// parent.appendChild(subHeading);

// const subHeading = document.createElement('h3');
// subHeading.innerHTML = "Javascript";
// heading.insertAdjacentElement('beforebegin', subHeading); 



// DOM EVents
// const button = document.querySelector('#btn');
// const heading = document.querySelector('#heading');

// button.addEventListener('click',(e) =>{
//     heading.style.color = 'purple';
//     console.log('Button clicked', e);
// })


const bulbSwitch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector('#bulb');

bulbSwitch.addEventListener('click',() =>{

    if(bulb.src.match('off')){
        bulb.src = './bulb-on.png';
        bulbSwitch.innerHTML = 'Turn off';  
    }
    else{
        bulb.src = './bulb-off.png';
        bulbSwitch.innerHTML = 'Turn on'; 
    }
    
});





