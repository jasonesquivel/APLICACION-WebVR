const imagen = document.querySelector('#imagen1');
imagen.addEventListener('click', () => {
  // Código para mostrar el mensaje flotante
});
const mensaje = document.querySelector('#mensaje');

imagen.addEventListener('click', () => {
  mensaje.classList.remove('oculto');
});

mensaje.addEventListener('click', () => {
  mensaje.classList.add('oculto');
});



