const main = document.querySelector("main");

url ="https://dog.ceo/api/breeds/image/random"

fetch(url)
.then(response=>response.json())
.then (data=>{
    const img = `<img src="${data.message}" alt ="Random dog images" />`
    main.insertAdjacentHTML("beforeend", img); 

});

