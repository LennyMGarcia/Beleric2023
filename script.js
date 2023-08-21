
window.addEventListener('DOMContentLoaded', function () {
    showSliderImg(sliderImg);
    showTasteImg(tasteImg)
})



let tasteImg = [
    'https://www.course-api.com/images/people/person-1.jpeg',
    'https://www.course-api.com/images/people/person-2.jpeg',
    'https://www.course-api.com/images/people/person-3.jpeg'

];

let currentTasteIndex = 0;

const tasteImages = document.querySelectorAll(".taste-image")
const TastePrevBtn = document.querySelector(".taste-prev-button");
const TasteNextBtn = document.querySelector(".taste-next-button");

function showTasteImg(imgs) {
    const newArrayOfImages = [...imgs];

    tasteImages.forEach(function (image, index) {
        currentTasteIndex = index
        const setsrc = newArrayOfImages[currentTasteIndex]
        image.setAttribute('src', setsrc)
    })
}

TasteNextBtn.addEventListener('click', function () {
    tasteImg = rearrangeArrayForward(tasteImg);
    currentTasteIndex = (currentTasteIndex + 1) % tasteImg.length;
    console.log("Elemento actual:", tasteImg[currentTasteIndex]);

    showTasteImg(tasteImg);
});

TastePrevBtn.addEventListener('click', function () {
    tasteImg = rearrangeArrayBackward(tasteImg);
    currentTasteIndex = (currentTasteIndex - 1 + tasteImg.length) % tasteImg.length;
    console.log("Elemento actual:", tasteImg[currentTasteIndex]);

    showTasteImg(tasteImg);
});



let sliderImg = [
    'https://www.course-api.com/images/people/person-1.jpeg',
    'https://www.course-api.com/images/people/person-2.jpeg',
    'https://www.course-api.com/images/people/person-1.jpeg',
    'https://www.course-api.com/images/people/person-3.jpeg'

];

let currentSliderIndex = 0;

const SliderImages = document.querySelectorAll(".slider-images")
const SliderPrevBtn = document.querySelector(".slider-prev-button");
const sliderNextBtn = document.querySelector(".slider-next-button");

function showSliderImg(imgs) {
    const newArrayOfImages = [...imgs];

    SliderImages.forEach(function (image, index) {
        currentSliderIndex = index
        const setsrc = newArrayOfImages[currentSliderIndex]
        image.setAttribute('src', setsrc)
    })
}

sliderNextBtn.addEventListener('click', function () {
    sliderImg = rearrangeArrayForward(sliderImg);
    currentSliderIndex = (currentSliderIndex + 1) % sliderImg.length;
    console.log("Elemento actual:", sliderImg[currentSliderIndex]);

    showSliderImg(sliderImg);
});

SliderPrevBtn.addEventListener('click', function () {
    sliderImg = rearrangeArrayBackward(sliderImg);
    currentSliderIndex = (currentSliderIndex - 1 + sliderImg.length) % sliderImg.length;
    console.log("Elemento actual:", sliderImg[currentSliderIndex]);

    showSliderImg(sliderImg);
});



function rearrangeArrayForward(array) {
    const newArray = [...array];
    const lastElement = newArray.pop();
    newArray.unshift(lastElement);
    return newArray;
}

function rearrangeArrayBackward(array) {
    const newArray = [...array];
    const firstElement = newArray.shift();
    newArray.push(firstElement);
    return newArray;
}

