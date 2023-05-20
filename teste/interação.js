let inputheroi = document.querySelector('#inputheroi').value
let divimg = document.querySelector('.divimagem')

function confirmarheroi(){
    let inputheroi = document.querySelector('#inputheroi').value

    let divimg = document.querySelector('.divimagem')

    let imagem = document.querySelector('.imagem')

    
    
    switch(inputheroi){
        case 'superman': divimg.innerHTML += "<img src ='https://i.pinimg.com/originals/6b/47/a5/6b47a5530ef2d54b1628cf688c495237.jpg'>";
      break;

      case 'flash': divimg.innerHTML += "<img src = 'https://wallpaper.dog/large/20496311.jpg'>";
        break

        case 'super3d': divimg.innerHTML += "<img src = 'https://i.gifer.com/SNqE.gif'>"
        break

        case 'flash3d': divimg.innerHTML += "<img src = 'https://i.gifer.com/3b2m.gif'>"
        break.
    }
    
    document.querySelector('#inputheroi').value = ""
    

}