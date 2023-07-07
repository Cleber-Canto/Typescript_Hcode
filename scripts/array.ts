const filmesCategorias: (string | number)[] = ["Comédia", "Drama", "Romance", "Aventura"];

// filmesCategorias.push("Rom");
// filmesCategorias.push(123456);

const filmesAnos: Array<number | string> = [];

for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {

    filmesAnos.push(ano);

}

console.log(filmesAnos);