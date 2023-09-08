
const generarAlimentosAleatorios = (cantidad) => { //funcion de flecha
  const tipos = ["vegetal", "animal"];
  const alimentosAleatorios = [];

  for ( i = 0; i < cantidad; i++) {
    const nombre = `Alimento ${i + 1}`;
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    const energia = Math.floor(Math.random() * 500); // valores de energia aleatoriamente pero hasta el 500

    alimentosAleatorios.push({ nombre, tipo, energia });
  }

  return alimentosAleatorios;
};

const alimentosAleatorios = generarAlimentosAleatorios(300); //creamos la generacion de alimentos en este caso los 300

const filtrarYCalcularSumatoria = (alimentos) => { //funcion de flecha
  setTimeout(() => {
    const alimentosVegetales = alimentos.filter( //filtramos el tipo y la energia 
      (alimento) => alimento.tipo === "vegetal" && alimento.energia > 200
    );
    const sumatoriaEnergiaVegetales = alimentosVegetales.reduce( //utilizamos el reduce para sacar la sumatoria total de energia a cada alimento 
      (sum, alimento) => sum + alimento.energia, //no hay callbacks
      0
    );
//imprimimos 
    console.log(`Alimentos vegetales con más de 200 unidades de energía:`);
    console.log(alimentosVegetales);
    console.log(`Sumatoria de energía de alimentos vegetales: ${sumatoriaEnergiaVegetales}`);
  }, 5000);
};

filtrarYCalcularSumatoria(alimentosAleatorios);
