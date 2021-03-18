// Your code goes here

// addEventListener(type, listener(callbackfunction))

//change logo word color red / black
const titleRed = document.querySelector(".logo-heading")
titleRed.addEventListener("mouseenter", () => {
    titleRed.style.color = "red";
});
titleRed.addEventListener("mouseout", () => {
    titleRed.style.color = "black";
});

//change nav link word size
const navLarge = document.querySelector(".nav .nav-link")
navLarge.addEventListener("mouseenter", () => {
    navLarge.style.fontSize="x-large";
});
navLarge.addEventListener("mouseout", () => {
    navLarge.style.fontSize="initial";
});

//main image zooming
const imageZoom = document.querySelector(".intro img") ;
imageZoom.addEventListener('dblclick', () => {
    imageZoom.style.transform = "scale(1.2)";
});

//make sub title a different color
const titleOrange = document.querySelectorAll('.text-content p')
titleOrange.forEach.addEventListener('click', (event) => {
    event.target.style.color = 'orange';
});
//above, but in an alternative way
const titleOrange = document.querySelectorAll('.text-content p')
titleOrange.forEach(title => {
    title.addEventListener('click', (event) => {
        event.target.style.color = 'green';
    });
});

//changing all 
const textOrange = document.querySelector('.destination')
textOrange.addEventListener('mouseenter', () => {
    textOrange.style.color = "orange";
    console.log("Oranged all areas");
});

//change background color
const changeBackground = document.querySelector('.destination')
changeBackground.addEventListener('click', () => {
    changeBackground.style.backgroundColor = "red"
    console.log("background turned to red")
});

