const doc = document;
const con = console.log;
const img = doc.querySelector('img');
const newImgBtn = doc.querySelector('button');

const urlRandom = 'https://dog.ceo/api/breeds/image/random';
const urlAll = 'https://dog.ceo/api/breeds/list/all';
// const urlCustom = 'https://dog.ceo/api/breed/Caucasian Ovcharka/images/random';
const urlCustom = 'https://dog.ceo/api/breed/';
const selectDog = doc.querySelector('.selectDog');
let thisDog = 'random dog';
let rDog = '';



fetch(urlAll)
    .then(response => response.json())
    .then(data => {
        const breeds = data.message;
        for (let breed in breeds) {
            const cBreed = breeds[breed];
            if (!cBreed.length) {
                rDog += `<option value="${breed}">${breed}</option>`
                continue
            }
            cBreed.forEach(item => {
                rDog += `<option value="${item} ${breed}">${item} ${breed}</option>`
            });
        }
        selectDog.innerHTML += rDog;
        selectDog.onchange = function() {
            thisDog = this.value;
        }
        newImgBtn.onclick = renderImg;
    });



function renderImg() {
    let urlDog = `${urlCustom}${thisDog}/images/random`;
    if (thisDog == 'random dog') {
        urlDog = urlRandom;
    }
    con(urlDog)
    fetch(urlDog)
        .then(response => response.json())
        .then(data => {
            const src = data.message;
            img.src = src;
        });
}
