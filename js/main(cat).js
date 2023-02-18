const doc = document;
const con = console.log;
const url = 'https://api.thecatapi.com/v1/images/search';

fetch(url)
    .then(response => response.json())
    .then(data => {
        let img = data[0].url;
        con(img)
    })
