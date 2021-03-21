
//Delete gifs
let deleteGifs = document.querySelector('#deletegifs')
deleteGifs.addEventListener('click', () => {
    window.location.reload()
})


//Guardar en una variable, la busqueda del usuario, y el boton de busqueda
let inputSearch = document.querySelector(".gif-search")
let buttonSearch = document.querySelector('#buttonsearch')

buttonSearch.addEventListener('click', () => {
        
        
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputSearch.value}&limit=25&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then((data) => {
            let numGifSearch = 0;
            
            for (let i = 0; i < data.data.length; i++){
              //Url del gif que genera el api
              let sourceGifSearch = data.data[numGifSearch].images.original.url;
              //Crear el elemento img
              let imgGifSearch = document.createElement('img')
              //Asignarle el sourceGif a mi imgGif
              imgGifSearch.src = sourceGifSearch;
              //Obtener el contenedor de trending
              let containerSearch = document.querySelector('.search-content')
              //Incrustar mi imagen en el contenedor
              containerSearch.append(imgGifSearch)
              //Aumentar en 1 mi numGif, para mostrarlos todos
              numGifSearch++
    
          }
        })
})




//Slider de busqueda

//Guardar las flechas en variables
const leftArrowSearch = document.querySelector('.arrow-before-search')
const rightArrowSearch = document.querySelector('.arrow-after-search')

leftArrowSearch.addEventListener('click', () => {
    setTimeout(() => {
        //Obtener el container de trendings
        let containerSearch = document.querySelector('.search-content');
        containerSearch.scrollLeft -= containerSearch.offsetWidth - 150;
    }, 600)
})

rightArrowSearch.addEventListener('click', () => {
    setTimeout(() => {
        //Obtener el container de trendings
        let containerSearch = document.querySelector('.search-content');
        containerSearch.scrollLeft += containerSearch.offsetWidth - 150;
    },600)
})
