//Variables
const marca = document.querySelector('#marca');
const resultado = document.querySelector('#resultado'); //contenedor para los resultados
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');



const max = new Date().getFullYear();
const min = max - 10;


//Generar un objeto con la busqueda
const datosBusqueda = {
  marca: '',
  year: '',
  puertas: '',
  transmision: '',
  minimo: '',
  maximo: '',
  color: '',
}
//Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos); //Muestra los autos
  llenarSelect(); //Muestra los años en el select
})

//Event Listener para los Select
marca.addEventListener('change',(e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
})
year.addEventListener('change',(e) => {
  datosBusqueda.year = e.target.value;
  filtrarAuto();
})
puertas.addEventListener('change',(e) => {
  datosBusqueda.puertas = e.target.value;
  filtrarAuto();
})
transmision.addEventListener('change',(e) => {
  datosBusqueda.transmision = e.target.value
  filtrarAuto();
})
minimo.addEventListener('change',(e) => {
  datosBusqueda.minimo = e.target.value
  filtrarAuto();
})
maximo.addEventListener('change',(e) => {
  datosBusqueda.maximo = e.target.value
  filtrarAuto();
})
color.addEventListener('change',(e) => {
  datosBusqueda.color = e.target.value;
  filtrarAuto();
})

//Funciones

function mostrarAutos(autos){
  limpiarHTML(); //Elimina el HTML previo
  //En db el array se llama autos
  autos.forEach(auto => {
    const autoP = document.createElement('p');

    autoP.textContent =  `${auto.marca} - ${auto.modelo} - ${auto.year} - ${auto.puertas} - Transmisiòn: ${auto.transmision} - Precio: $${auto.precio} - Color: ${auto.color}`
     //Insertamos en el HTML
    resultado.appendChild(autoP)
  });

}

function limpiarHTML(){
  // Mientras haya algo
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
  }
}

//Muestra los años en el select
function llenarSelect(){
  for (let i = max; i > min; i--){
    const opcion = document.createElement('option');
    opcion.value = `${i}`;
    opcion.textContent = `${i}`;
    year.appendChild(opcion);
  }
}

//funcion que filtra en base a la busqueda

function filtrarAuto(){
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTransmision);
  console.log(resultado);

  if (resultado.length){
    mostrarAutos(resultado);
  } else {
    limpiarHTML();
    noResultado();
  }
};

function noResultado(){
  const noResultado = document.createElement('div');
  noResultado.classList.add('alerta','error');
  noResultado.textContent = 'No hay resultado';
  resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
  if (datosBusqueda.marca){
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
}

function filtrarYear(auto){
  if (datosBusqueda.year){
    return auto.year === parseInt(datosBusqueda.year);
  }
  return auto;
}

function filtrarMinimo(auto){
  if (datosBusqueda.minimo){
    return auto.precio >= datosBusqueda.minimo;
  }
  return auto;
}

function filtrarMaximo(auto){
  if (datosBusqueda.maximo){
    return auto.precio <= datosBusqueda.maximo;
  }
  return auto;
}
function filtrarPuertas(auto){
  if (datosBusqueda.puertas){
    return auto.puertas === parseInt(datosBusqueda.puertas);
  } 
  return auto;
}
function filtrarColor(auto){
  if (datosBusqueda.color){
    return auto.color === datosBusqueda.color;
  } 
  return auto;
}
function filtrarTransmision(auto){
  if (datosBusqueda.transmision){
    return auto.transmision === datosBusqueda.transmision;
  } 
  return auto;
}

