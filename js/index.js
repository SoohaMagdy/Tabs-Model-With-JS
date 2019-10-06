var imageList = document.querySelectorAll(".img-item");
var lightBoxContainer = document.querySelector(".lightBox-Container");
var lightBox = document.querySelector(".lightBox");
var imgArray = [];
var currentIndex = 0;
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");

for (var i = 0; i < imageList.length; i++) {
    imgArray.push(imageList[i]);
    imageList[i].addEventListener("click", function (e) {
        lightBoxContainer.classList.add("show");
        var imgSrc = e.target.src;
        lightBox.style.backgroundImage = "url(" + imgSrc + ")";
        currentIndex = imgArray.indexOf(e.target);
    })
}
function nextMove() {
    currentIndex++;
    if (currentIndex == imgArray.length) {
        currentIndex = 0;
    }
    lightBox.style.backgroundImage = "url(" + imgArray[currentIndex].src + ")";
}
function prevMove() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgArray.length - 1;
    }
    lightBox.style.backgroundImage = "url(" + imgArray[currentIndex].src + ")";
}
next.addEventListener("click", function () {
    nextMove();
})
prev.addEventListener("click", function () {
    prevMove();
})
close.addEventListener("click", function () {
    lightBoxContainer.classList.remove("show");
})
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
        lightBoxContainer.classList.remove("show");
    }
    else if (e.keyCode == 39) {
        nextMove();
    }
    else if (e.keyCode == 37) {
        prevMove();
    }
})