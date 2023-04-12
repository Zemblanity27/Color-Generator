const btn = document.getElementById('genc');


btn.addEventListener('click', function() {

    document.body.style.backgroundColor = generateColor();
    document.querySelector('p').innerHTML = "Background Color: " + generateColor();

});
//Random number from 0-255
function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}
//Generate an Rgb color code
function generateColor() {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const c = getRandomNumber();
    return `Rgb(${a}, ${b}, ${c})`;

}

