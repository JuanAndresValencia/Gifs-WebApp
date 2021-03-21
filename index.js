
//Guardar ApiKey
const apiKey = 'ARYEHZdwtZKmByVOEVV05regmBx0orty'



//Seccion de trending
//Hacer peticion a la api para guardar gifs que esten en trending
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
   .then(response => response.json())
   .then((data) => {
      let numGifTrending = 0;

      for (let i = 0; i < data.data.length; i++){
          //Url del gif que genera el api
          let sourceGifTrending = data.data[numGifTrending].images.original.url;
          //Crear el elemento img
          let imgGifTrending = document.createElement('img')
          //Asignarle el sourceGif a mi imgGif
          imgGifTrending.src = sourceGifTrending;
          //Obtener el contenedor de trending
          let containerTrending = document.querySelector('.trending-content')
          //Incrustar mi imagen en el contenedor
          containerTrending.append(imgGifTrending)
          //Aumentar en 1 mi numGif, para mostrarlos todos
          numGifTrending++

      }

   })

//Slider de tendencias

//Guardar las flechas en variables
const leftArrow = document.querySelector('.arrow-before')
const rightArrow = document.querySelector('.arrow-after')

leftArrow.addEventListener('click', () => {
    setTimeout(() => {
        //Obtener el container de trendings
        let containerTrending = document.querySelector('.trending-content');
        containerTrending.scrollLeft -= containerTrending.offsetWidth - 150;
    }, 600)
})

rightArrow.addEventListener('click', () => {
    setTimeout(() => {
        //Obtener el container de trendings
        let containerTrending = document.querySelector('.trending-content');
        containerTrending.scrollLeft += containerTrending.offsetWidth - 150;
    },600)
})





//Seccion de deportes
//Hacer peticion a la api para guardar gifs que esten en random
fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=Deportes&limit=15&offset=0&rating=g&lang=es`)
   .then(response => response.json())
   .then((data) => {
      let numGifDeportes = 0;

      for (let i = 0; i < data.data.length; i++){
          //Url del gif que genera el api
          let sourceGifDeportes = data.data[numGifDeportes].images.original.url;
          //Crear el elemento img
          let imgGifDeportes = document.createElement('img')
          //Asignarle el sourceGif a mi imgGif
          imgGifDeportes.src = sourceGifDeportes;
          //Obtener el contenedor de trending
          let containerDeportes = document.querySelector('.deportes-content')
          //Incrustar mi imagen en el contenedor
          containerDeportes.append(imgGifDeportes)
          //Aumentar en 1 mi numGif, para mostrarlos todos
          numGifDeportes++

      }
})




//Seccion animales
//Hacer peticion a la api para guardar gifs que esten en random
fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=animales&limit=20&offset=0&rating=g&lang=es`)
   .then(response => response.json())
   .then((data) => {
      let numGifAnimales = 0;

      for (let i = 0; i < data.data.length; i++){
          //Url del gif que genera el api
          let sourceGifAnimales = data.data[numGifAnimales].images.original.url;
          //Crear el elemento img
          let imgGifAnimales = document.createElement('img')
          //Asignarle el sourceGif a mi imgGif
          imgGifAnimales.src = sourceGifAnimales;
          //Obtener el contenedor de trending
          let containerAnimales = document.querySelector('.animales-content')
          //Incrustar mi imagen en el contenedor
          containerAnimales.append(imgGifAnimales)
          //Aumentar en 1 mi numGif, para mostrarlos todos
          numGifAnimales++

      }
})

