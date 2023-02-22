
// Agregamos el efecto de hover a las habilidades
const habilidades = document.querySelectorAll('.left ul li');
habilidades.forEach(habilidad => {
  habilidad.addEventListener('mouseover', () => {
    habilidad.style.backgroundColor = '#333';
    habilidad.style.color = '#fff';
  });
  habilidad.addEventListener('mouseout', () => {
    habilidad.style.backgroundColor = '';
    habilidad.style.color = '';
  });
});
//Agregamos el efecto para resaltar el parrafo cuando pasa el mouse
const parrafos = document.querySelectorAll('p');

parrafos.forEach(parrafo => {
  parrafo.addEventListener('mouseover', () => {
    parrafo.style.backgroundColor = '#FFFF00';
  });

  parrafo.addEventListener('mouseout', () => {
    parrafo.style.backgroundColor = '';
  });
});
