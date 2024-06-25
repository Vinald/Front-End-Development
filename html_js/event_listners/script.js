// create li items
const ulElement = document.getElementById('list-items');


// increment button
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', () => {
    const count = document.getElementById('counter');
    count.innerHTML = parseInt(count.innerHTML) + 1;

    // create an li element
    const liElement = document.createElement('li');
    const textNode = document.createTextNode(`Item ${count.innerHTML}`);
    liElement.appendChild(textNode);

    // append the text to the li element
    ulElement.appendChild(liElement);
})


// Decrement button
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', () => {
    const count = document.getElementById('counter');
    count.innerHTML = parseInt(count.innerHTML) - 1;

    // remove the last li element
    const liElement = ulElement.lastElementChild;
    ulElement.removeChild(liElement);
})

// Reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    const count = document.getElementById('counter');
    count.innerHTML = 0;

    // remove all li elements
    ulElement.innerHTML = '';
    
})


