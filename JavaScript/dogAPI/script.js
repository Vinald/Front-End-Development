// Dog API
//  https://dogs.ceo/api/breeds/image/random
const dogImage = document.getElementById("dogImage");
const dogButton = document.getElementById("dogButton");

// .then is a promise that waits for the fetch to finish
// .then is a callback function that is called when the fetch is done
// .then takes a response object as an argument
// .then(response => response.json()) is a promise that waits for the response to finish
// .then(response => response.json()) is a callback function that is called when the response is done
// .then(response => response.json()) takes the response object as an argument
// .then(response => response.json()) returns a promise that waits for the json to finish
// .then(data => console.log(data)) is a promise that waits for the json to finish
// .then(data => console.log(data)) is a callback function that is called when the json is done
dogButton.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dogImage.src = data.message;
    });
});
