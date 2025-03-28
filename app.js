import { registrarDestino, mostrarItinerario } from './viajes.js';

// Elementos del DOM
const form = document.getElementById('form-viaje');
const resultado = document.getElementById('resultado');

// envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const destino = form.destino.value;
  const fecha = form.fecha.value;
  const transporte = form.transporte.value;

  try {
    registrarDestino(destino, fecha, transporte);
    actualizarItinerario();
    form.reset();
  } catch (error) {
    alert(error.message);
  }
});

// Actualizar vista
const actualizarItinerario = () => {
  resultado.textContent = mostrarItinerario();
};

// Inicializar con ejemplos
registrarDestino("Paris", "2024-06-15", "Avión");
registrarDestino("Londres", "2024-07-01", "Tren");
actualizarItinerario();