var box = document.getElementById("box");
console.log(box);

var totalHeight = window.innerHeight;
var totalWidth = window.innerWidth;

var availableWidth = window.innerWidth - 80;
var availableHeight = window.innerHeight - 80;
console.log(availableWidth);


box.addEventListener('mouseover', function catchMe() {



    var randomHeight = Math.floor(Math.random() * availableHeight);

    var randomWidth = Math.floor(Math.random() * availableWidth);
    console.log(randomWidth);

    box.style.top = randomHeight + 'px';
    box.style.left = `${randomWidth}px`;


})