var slides = ["div1", "div2", "div3"];
var x = 0;
var y = 0;
var currentSlide = 0;

window.onload = function () {
    document.getElementById("nav").onclick = nextSlide;
}

function nextSlide () {
    setTimeout("moveBlock()", 1000);
    console.log("1");
}

function moveBlock () {
    x+=2;
    y+=2;
    var obj = document.getElementById(slides[currentSlide]);
    obj.style.top = x + "px";
    obj.style.left  = y + "px";
    if (x < (100 + currentSlide * 60)) {
        setTimeout("moveBlock()", 15);
    }
    else {
        currentSlide++;
        x = 0;
        y = 0;
    }
    
    if (currentSlide >= slides.length) {
        document.getElementById("nav").onclick=null;
    }
}