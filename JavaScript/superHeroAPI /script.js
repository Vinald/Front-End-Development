const accessKey = "c7281519a68106d8b4bb7ec29c876cc4";
const baseURL = "https://superheroapi.com/api.php/";
const heroButton = document.getElementById("heroButton");
const heroImage = document.getElementById("heroImage");

const heroSearchButton = document.getElementById("heroSearchButton");
const heroSearchImage = document.getElementById("heroSearchImage");
const heroNameInput = document.getElementById("heroNameInput");

const heroResultName = document.getElementById("heroResultName");

const img = "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg";

// generate a random hero
const getSuperHero = (id) => {
  fetch(`${baseURL}${accessKey}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      heroImage.src = data.image.url;
      heroImage.alt = name;
      heroResultName.textContent = name;
    });
};

const randomId = () => {
  const numberOfHeros = 731;
  return Math.floor(Math.random() * numberOfHeros) + 1;
};

// search for a hero by name
const getSuperHeroByName = (name) => {
  fetch(`${baseURL}${accessKey}/search/${name}`)
    .then((response) => response.json())
    .then((data) => {
      const name = data.results[0].name;
      const image = data.results[0].image.url;
      heroSearchImage.src = image;
      heroSearchImage.alt = name;
    });
}; 

heroButton.addEventListener("click", () => {
  getSuperHero(randomId());
});

heroSearchButton.addEventListener("click", () => {
  const heroName = heroNameInput.value;
  getSuperHeroByName(heroName);
});
