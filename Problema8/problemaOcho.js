// Datos de los 15 mapas de planetas
const mapasPlanetas = [
    { nombrePlaneta: "Tatooine", latitud: 23, longitud: 30, oxigeno: 0.7, agua: 1000 },
     { nombrePlaneta: "apnoti", latitud: 26, longitud: 30, oxigeno: 0.13, agua: 1000 },
      { nombrePlaneta: "neptu", latitud: 27, longitud: 30, oxigeno: 0.12, agua: 1000 },
       { nombrePlaneta: "jupi", latitud: 14, longitud: 30, oxigeno: 0.11, agua: 1000 },
        { nombrePlaneta: "satur", latitud: 32, longitud: 30, oxigeno: 0.10, agua: 1000 },
         { nombrePlaneta: "nep", latitud: 21, longitud: 30, oxigeno: 0.2, agua: 1000 },
          { nombrePlaneta: "mart", latitud: 34, longitud: 30, oxigeno: 0.1, agua: 1000 },
           { nombrePlaneta: "tierr", latitud: 20, longitud: 30, oxigeno: 0.8, agua: 1000 },
            { nombrePlaneta: "macania", latitud: 29, longitud: 30, oxigeno: 0.9, agua: 1000 },
             { nombrePlaneta: "lupiter", latitud: 25, longitud: 30, oxigeno: 0.6, agua: 1000 },
              { nombrePlaneta: "yeiday", latitud: 30, longitud: 30, oxigeno: 0.4, agua: 1000 },
               { nombrePlaneta: "yedaydark", latitud: 43, longitud: 30, oxigeno: 0.5, agua: 1000 },
                { nombrePlaneta: "mazare", latitud: 25, longitud: 30, oxigeno: 0.3, agua: 1000 },
  
];

// Función convencional para realizar las operaciones
function realizarOperaciones(mapasPlanetas) {
    let totalAgua = 0;
    let totalOxigeno = 0;

    let planetaOxigenoNegativo = null;
    let planetaSinAgua = null;

    mapasPlanetas.forEach(planeta => {
        totalAgua += planeta.agua;
        totalOxigeno += planeta.oxigeno;

        if (planeta.oxigeno < 0) {
            planetaOxigenoNegativo = planeta;
        }

        if (planeta.agua === 0) {
            planetaSinAgua = planeta;
        }
    });

    totalOxigeno *= 100;

    return { totalAgua, totalOxigeno, planetaOxigenoNegativo, planetaSinAgua };
}

// Ejemplo de uso
const resultado = realizarOperaciones(mapasPlanetas);

console.log(`Total de agua de los 15 planetas: ${resultado.totalAgua}`);
console.log(`Total de oxígeno multiplicado por 100: ${resultado.totalOxigeno}`);
if (resultado.planetaOxigenoNegativo) {
    console.log(`Planeta con oxígeno negativo: ${resultado.planetaOxigenoNegativo.nombrePlaneta}`);
    console.log(resultado.planetaOxigenoNegativo);
}
if (resultado.planetaSinAgua) {
    console.log(`Planeta sin agua: ${resultado.planetaSinAgua.nombrePlaneta}`);
    console.log(resultado.planetaSinAgua);
}
