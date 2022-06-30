//Variables
const marca = document.querySelector('#marca');
const resultado = document.querySelector('#resultado');
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
  mostrarAutos(); //Muestra los autos
  llenarSelect(); //Muestra los años en el select
})

//Event Listener para los Select
marca.addEventListener('change',(e) => {
  datosBusqueda.marca = e.target.value
  filtrarAuto();
})
year.addEventListener('change',(e) => {
  datosBusqueda.year = e.target.value
})
puertas.addEventListener('change',(e) => {
  datosBusqueda.puertas = e.target.value
})
transmision.addEventListener('change',(e) => {
  datosBusqueda.transmision = e.target.value
})
minimo.addEventListener('change',(e) => {
  datosBusqueda.minimo = e.target.value
})
maximo.addEventListener('change',(e) => {
  datosBusqueda.maximo = e.target.value
})
color.addEventListener('change',(e) => {
  datosBusqueda.color = e.target.value;
})

//Funciones

function mostrarAutos(){
  //En db el array se llama autos
  autos.forEach(auto => {
    const autoP = document.createElement('p');

    autoP.textContent =  `${auto.marca} - ${auto.modelo} - ${auto.year} - ${auto.puertas} - Transmisiòn: ${auto.transmision} - Precio: $${auto.precio} - Color: ${auto.color}`
     //Insertamos en el HTML
    resultado.appendChild(autoP)
  });

}

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
  const resultado = autos.filter()
}
