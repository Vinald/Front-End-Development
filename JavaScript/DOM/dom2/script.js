let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let heading = document.getElementById("heading");

div1.addEventListener("click", () => (heading.innerHTML = "<h1>RED</h1>"));

div2.addEventListener("click", () => (heading.innerHTML = "<h1>GREEN</h1>"));

div3.addEventListener("click", () => (heading.innerHTML = "<h1>YELLOW</h1>"));
