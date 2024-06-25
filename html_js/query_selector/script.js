// Query Selector

// using the tag name
const heading = document.querySelector('h1');
heading.innerHTML = 'I am a new heading';
heading.style.color = 'red';


// using the class
const heading1 = document.querySelector('.heading');
heading1.innerHTML = 'I am using the class';
heading1.style.color = 'blue';


// using the id
const heading2 = document.querySelector('#heading');
heading2.innerHTML = 'I am using the id';  
heading2.style.color = 'green';


// Query Selector All
const allListItems = document.querySelectorAll('ul li');
console.log(allListItems);
allListItems.forEach((item) => {
    item.style.color = 'purple';
});

for (let i = 0; i < allListItems.length; i++) {
    allListItems[i].style.color = 'orange';
}


// get element by id
const heading3 = document.getElementById('heading');
heading3.innerHTML = 'I am using the id (get element by id)';