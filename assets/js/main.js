/* Dato un array di oggetti letterali con:
  -url dell’immagine
  -titolo
  -descrizione Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra. */

//struttura dati
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//Milestone 1:
//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
//Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

//seleziono l'elemento della dom per inserire le mie immagini
const sliderEl=document.querySelector('.slider')
let activeImage=0
    images.forEach((image, i)=>{
       const imageEl= `
       <img class="${i===activeImage ? 'active' : ''}"  src="./assets/${image.image}" alt="">
       <h3 class="${i===activeImage ? 'active text-center' : ''}"> ${image.title}</h3>
       <p class="${i===activeImage ? 'active text-center' : ''}"> ${image.text}</p>`
        sliderEl.insertAdjacentHTML('beforeend', imageEl)
    })
    

    
    
    //utilizzo event listener per il click del bottone
     const nextEl=document.querySelector('.next');
     nextEl.addEventListener('click', function(){
        //seleziono l'elemento con la classe active
        const allImg=document.querySelectorAll('img')
        console.log(allImg)
        const allH3=document.querySelectorAll('h3')
        const allP=document.querySelectorAll('p')
        /* const activeEl= allImg[activeImage]
        console.log(activeEl) */
        //rimuovo l'elemento active
        allImg[activeImage].classList.remove('active') 
        allH3[activeImage].classList.remove('active') 
        allP[activeImage].classList.remove('active') 
        //incremento l'activeImage di 1
        activeImage++ 
        if (activeImage > images.length -1 ){
          activeImage=0
       } 
        //aggiungo la classe active
        allImg[activeImage].classList.add('active')
        allH3[activeImage].classList.add('active', 'text-center')
        allP[activeImage].classList.add('active', 'text-center')

        
    })
      //utilizzo event listener per il click del bottone
      const prevEl=document.querySelector('.prev');
      prevEl.addEventListener('click', function(){
         //seleziono l'elemento con la classe active
        const allImg=document.querySelectorAll('img')
        console.log(allImg)
        const allH3=document.querySelectorAll('h3')
        const allP=document.querySelectorAll('p')
        /* const activeEl= allImg[activeImage]
        console.log(activeEl) */
        //rimuovo l'elemento active
        allImg[activeImage].classList.remove('active') 
        allH3[activeImage].classList.remove('active') 
        allP[activeImage].classList.remove('active') 
        //incremento l'activeImage di 1
        activeImage-- 
        if (activeImage === images.length-(images.length+1) ){
            activeImage=4
         } 
        //aggiungo la classe active
        allImg[activeImage].classList.add('active')
        allH3[activeImage].classList.add('active', 'text-center')
        allP[activeImage].classList.add('active', 'text-center')
          
      })

/* 
      console.log(images.length+1) */