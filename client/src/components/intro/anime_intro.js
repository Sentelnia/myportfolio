


//affiche les lettres du mot bienvenue une par une puis fait apparaitre le mot entrer


export function animLetter(){
  return new Promise((resolve, reject)=>{
    let $letters = document.querySelector('.letters');
    let word = "Bienvenue";

    //write 'bienvenue' letter
    
    word.split('').forEach((letter,index) =>{
      setTimeout(() => {
        $letters.innerHTML += letter
      },index * 200)
    })
    resolve()
  })
  
  
}

//fait apparaitre le button entrer
export function enterButton(){

  let $enter = document.querySelector('.enter');

  console.log('entrer')

}

