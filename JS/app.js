let indiceSlideAttiva = 0
// let clickCounter = 0
const slideElements = document.getElementsByClassName('slide')


const leftBtnEl = document.querySelector('.arrow.carousel-left-arrow')
const rightBtnEl = document.querySelector('.arrow.carousel-right-arrow')

rightBtnEl.addEventListener('click', function () {
    if (indiceSlideAttiva < 6){
        
        console.log('slide corrente', indiceSlideAttiva)
       
        let slideCorrente = slideElements[indiceSlideAttiva]
       //   togliendo la classe active
        slideCorrente.classList.remove('active')
    
       //   inremento l'indice
        indiceSlideAttiva += 1
    
        let prossimaSlide = slideElements[indiceSlideAttiva]
       //   aggiungiamo la classe active alla seconda slide
        prossimaSlide.classList.add('active')
    
        console.log('next slide', indiceSlideAttiva)
        
        if (indiceSlideAttiva === 5){
            let slideCorrente = slideElements[indiceSlideAttiva]
            slideCorrente.classList.remove('active')
            
            indiceSlideAttiva = 0
    
            let prossimaSlide = slideElements[indiceSlideAttiva]
            // aggiungiamo la classe active alla seconda slide
            prossimaSlide === 0
            prossimaSlide.classList.add('active')
            
        }
    }
        
})

leftBtnEl.addEventListener('click', function () {
    
    console.log('slide corrente', indiceSlideAttiva)
   
    let slideCorrente = slideElements[indiceSlideAttiva]
   //   togliendo la classe active
    slideCorrente.classList.remove('active')

   //   inremento l'indice
    indiceSlideAttiva -= 1

    let prossimaSlide = slideElements[indiceSlideAttiva]
   //   aggiungiamo la classe active alla seconda slide
    prossimaSlide.classList.add('active')

    console.log('next slide', indiceSlideAttiva)

})



    

    
    
    
        
    

    


    
    

    
