/*function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector ('div#imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >=0 && hora <24) {img.src = 'sopro.jpeg'}
} */

function carregar() {
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('div#imagem');
    var art = window.document.querySelector('article#art')
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 18) {
      img.innerHTML = '<img src="sopro200.jpeg">'; }
  }
  