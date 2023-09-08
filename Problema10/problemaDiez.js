function generarAlimentosAleatorios(cantidad) {
  const tipos = ["vegetal", "animal"];
  const alimentosAleatorios = [];

  for (let i = 0; i < cantidad; i++) {
    const nombre = `Alimento ${i + 1}`;
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    const energia = Math.floor(Math.random(), 500); 

    alimentosAleatorios.push({ nombre, tipo, energia });
  }

  return alimentosAleatorios;
}

const alimentosAleatorios = generarAlimentosAleatorios(300); 

filtrarYCalcularSumatoria(alimentosAleatorios);
