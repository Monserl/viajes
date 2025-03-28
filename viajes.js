// destinos
const destinos = [];

// Objeto con costos (organizado)
const COSTOS = {
  destinos: {
    "Paris": 500,
    "Londres": 400,
    "New York": 600,
    "Tokio": 800
  },
  transporte: {
    "Avión": 200,
    "Tren": 100,
    "Autobús": 50
  }
};

// Función registrar destino
const registrarDestino = (destino, fecha, transporte) => {
  if (!destino || !fecha || !transporte) {
    throw new Error("Todos los campos son obligatorios");
  }

  const nuevoViaje = {
    destino,
    fecha,
    transporte,
    id: Date.now(), // ID único
    costo: calcularCosto(destino, transporte)
  };

  destinos.push(nuevoViaje);
  return nuevoViaje;
};

// Función calcular costo
const calcularCosto = (destino, transporte) => {
  const costoBase = COSTOS.destinos[destino] || 0;
  const costoTransporte = COSTOS.transporte[transporte] || 0;
  return costoBase + costoTransporte;
};

// Función mostrar itinerario
const mostrarItinerario = () => {
  if (destinos.length === 0) return "No hay viajes registrados";
  
  return destinos.map(viaje => 
    `Destino: ${viaje.destino}\n` +
    `Fecha: ${viaje.fecha}\n` +
    `Transporte: ${viaje.transporte}\n` +
    `Costo: $${viaje.costo}\n` +
    `---------------------------`
  ).join('\n');
};

// Exportar funciones
export { destinos, registrarDestino, mostrarItinerario, calcularCosto };