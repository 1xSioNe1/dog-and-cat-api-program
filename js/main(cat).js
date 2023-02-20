const doc = document;
const con = console.log;
const url = 'https://api.thecatapi.com/v1/images/search';
const catImg = doc.querySelector('.cat-img');
const newImgBtn = doc.querySelector('.custom-btn');



newImgBtn.onclick = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let img = data[0].url;

        renderImg(img);
});
};

function renderImg(img) {
    catImg.src = img;
}

console.log(newImgBtn);
console.dir(newImgBtn);


