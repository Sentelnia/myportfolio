

//affiche les lettres du mot bienvenue une par une puis fait apparaitre le mot entrer



export function animLetter(word,time,classname){
    let $letters = document.querySelector(classname);;
    console.log(classname)
    //write 'bienvenue' letter
    setTimeout(() => {
      word.split('').forEach((letter,index) =>{
        setTimeout(() => {
          $letters.innerHTML += letter
        },index * 200)
      })
    }, time)
}

