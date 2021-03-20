
//Guardar ApiKey
const apiKey = 'ARYEHZdwtZKmByVOEVV05regmBx0orty'

//Hacer peticion a la api para guardar gifs que esten en trending
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
   .then(response => response.json())
   .then((data) => {
      let numGif = 0;

      for (let i = 0; i < data.data.length; i++){
          //Url del gif que genera el api
          let sourceGif = data.data[numGif].images.original.url;
          //Crear el elemento img
          let imgGif = document.createElement('img')
          //Asignarle el sourceGif a mi imgGif
          imgGif.src = sourceGif;
          //Obtener el contenedor de trending
          let containerTrending = document.querySelector('.trending-content')
          //Incrustar mi imagen en el contenedor
          containerTrending.append(imgGif)
          //Aumentar en 1 mi numGif, para mostrarlos todos
          numGif++

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

