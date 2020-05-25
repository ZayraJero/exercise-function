function director() {
  return `tarantino`;
}

function año() {
  let movie = Math.floor(Math.random() + 1970);
  return new Promise((resolve, reject) => {
    res(movie);
  });
}

function peliculas(nombre) {
  let direct = director();
  let year = año();
  let almacenamiento = ` haz elegido ${nombre} y el autor es: ${direct} y el año es ${year}`;

  return almacenamiento;
}

console.log(peliculas("Django"));
