const Peliculas = {
    nombre: 'Harry',
    id: 01,
    reproducir(){
        return  `reproduciendo pelicula... ${this.nombre}`;
 } 
}

class Pelicula {
    constructor(name, ID){
        this.nombre = name;
        this.id = ID;
    }
    reproducir(){
        return `Reproduciendo pelicula ${this.nombre}`
    }
}

class Serie extends Pelicula{
 
    constructor(name, ID, cap){
        super(name, ID)
        this.capitulo = cap
    }

    reproducirCapitulo(){
        return `Reproduciendo capitulo ${this.nombre}, que tiene ID es ${this.id} y el capitulo numero ${this.capitulo}`
    }
}
const peliculaUno = new Pelicula('Harry', 1);
const peliculaDos = new Pelicula('Araña', 2);
const serieUno = new Serie('Dexter', 3, 55)

console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(serieUno.reproducirCapitulo())
