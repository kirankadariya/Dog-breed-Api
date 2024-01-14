const main = document.querySelector("main");

url ="https://dog.ceo/api/breeds/image/random/10"

fetch(url)
.then(response=>response.json())
.then (data=>{
    const images = data.message.map(image =>`<img src="${image}" alt = "Random dog images breed" >`)
    .join('');
    main.insertAdjacentHTML("beforeend", images); 

})
.catch(err=>console.log("There was problem fetching: " + err));


