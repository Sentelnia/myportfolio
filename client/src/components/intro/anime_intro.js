

//affiche les lettres du mot bienvenue une par une puis fait apparaitre le mot entrer



export function animLetter(word,time,classname){
    let $letters = document.querySelector(classname);
    console.log(classname)
    setTimeout(() => {
      word.split('').forEach((letter,index) =>{
        setTimeout(() => {
          let $letter = document.createElement("span")
          $letters.appendChild($letter).innerHTML = letter
        },index * 100)
      })
    }, time)
}

