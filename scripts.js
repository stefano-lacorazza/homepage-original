

var player = document.getElementById('mario')



// Actualizamos la ubicación del personaje
function updateElement(element, incx, incy) {
  var x = Number(element.getAttribute('data-x')) + incx
  var y = Number(element.getAttribute('data-y')) + incy
  

  if ((x > -80) && (x < 800)) 
    element.style.transform = 'translate('+ x +'px, '+ y +'px)'
  
  if (element.classList.contains('mirror'))
    element.style.transform += ' scaleX(-1)'
    
  if (element.classList.contains('big'))
    element.style.transform += ' scale(2)'
  
  // Update HTML
  element.setAttribute('data-x', x)
  element.setAttribute('data-y', y)
}

// Cuando el usuario pulsa una tecla
window.addEventListener('keydown', function(e) {
  console.log(e)
  
  var speed = 10;
  //var speed = (e.ctrlKey ? 20 : 10)
  
  // Cursor hacia la derecha
  if (e.keyCode == 39) {
    player.classList.add('caminar')
    player.classList.remove('mirror')
    updateElement(player, +speed, 0)
  }
  // Cursor hacia la izquierda
  else if (e.keyCode == 37) {
    player.classList.add('caminar')
    player.classList.add('mirror')
    updateElement(player, -speed, 0)
  }
  


})


window.addEventListener('keyup', function(e) {

  player.classList.remove('caminar')
})


updateElement(player, 0, 0)