

const obtenerDatos = async () => {
  return "Datos obtenidos";
};

(async () => {
  const resultado = await obtenerDatos();
  console.log(resultado);
})();