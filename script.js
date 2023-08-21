
let reviews = [
    'https://www.course-api.com/images/people/person-1.jpeg',
    'https://www.course-api.com/images/people/person-2.jpeg',
    'https://www.course-api.com/images/people/person-4.jpeg',
    'https://www.course-api.com/images/people/person-3.jpeg'
    
];

const sliderPrincipalImage = document.getElementById("slider-principal-image");
const sliderAnotherImageFirst = document.getElementById("slider-another-image-first");
const sliderAnotherImageSecond = document.getElementById("slider-another-image-second");
const sliderAnotherImageThird = document.getElementById("slider-another-image-third");

const images = document.querySelectorAll(".images")

const SliderPrevBtn = document.querySelector(".slider-prev-button");
const sliderNextBtn = document.querySelector(".slider-next-button");

const TastePrevBtn = document.querySelector(".taste-prev-button");
const TasteNextBtn = document.querySelector(".taste-next-button");

let indiceActual = 0;
let listOfImage = [];


window.addEventListener('DOMContentLoaded', function () {
    console.log(reviews);
    reviews[indiceActual];
    showPerson(reviews);
})

function showPerson(imgs) {
    const newArrayOfImages = [...imgs];

    images.forEach(function (image, index) {
        indiceActual = index
        const setsrc = newArrayOfImages[indiceActual]
        image.setAttribute('src', setsrc)
     })


}

sliderNextBtn.addEventListener('click', function(){
    reviews = reorganizarArrayHaciaAdelante(reviews);
  indiceActual = (indiceActual + 1) % reviews.length;
  console.log("Elemento actual:", reviews[indiceActual]);

    showPerson(reviews);
  });

  SliderPrevBtn.addEventListener('click', function(){
    reviews = reorganizarArrayHaciaAtras(reviews);
    indiceActual = (indiceActual - 1 + reviews.length) % reviews.length;
    console.log("Elemento actual:", reviews[indiceActual]);

    showPerson(reviews);
  });

  function reorganizarArrayHaciaAdelante(array) {
    const newArray = [...array];
    const ultimoElemento = newArray.pop();
    newArray.unshift(ultimoElemento);
    return newArray;
  }

  function reorganizarArrayHaciaAtras(array) {
    const newArray = [...array];
    const primerElemento = newArray.shift();
    newArray.push(primerElemento);
    return newArray;
  }

/*const elementos = [1, 2, 3, 4]; // Tu array de elementos
let indiceActual = 0; // Índice actual en el array reorganizado

function reorganizarArray(array) {
  const newArray = [...array];
  const ultimoElemento = newArray.pop();
  newArray.unshift(ultimoElemento);
  return newArray;
}

// Ejemplo de cómo usar la función con un botón para avanzar al siguiente elemento
const botonSiguiente = document.getElementById('boton-siguiente'); // Reemplaza 'boton-siguiente' con el ID de tu botón

botonSiguiente.addEventListener('click', () => {
  elementos = reorganizarArray(elementos);
  indiceActual = (indiceActual + 1) % elementos.length;
  console.log("Elemento actual:", elementos[indiceActual]);
});*/