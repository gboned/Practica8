/****************************************/
/*                                      */
/*  Construir Objetos Automáticamente   */
/*                                      */
/****************************************/

// Una empresa mandará construir 10 coches para 10 de sus empleados.

// Creo una variable con las 10 posibles marcas de coche (puede que alguna de ellas no se utilice).
var marcasCoches = ["Ferrari", "Fiat", "Smart", "Porsche", "Citroen", "Tesla", "Toyota", "Opel", "Audi", "Lancia"];

// Creo una variable con los nombres de los 10 empleados que recibirán un coche.
var duenyosCoches = ["David", "Brian", "Laura", "Cristian", "Lola", "Estefanía", "Cristina", "Manuel", "Leonardo", "Ana"];

// Creo el constructor del coche, que tendrá las marcas de los coches y sus dueños.
function coche(marcasCoches, duenyosCoches) {
    this.marcasCoches = marcasCoches;
    this.duenyosCoches = duenyosCoches
}

// Creo la función para generar los coches, las marcas se pueden repetir, pero los dueños no.
function generadorCoches(){
    // Creo un bucle for, para que se vayan generando coches, y mientras i sea menor a la longitud de la variable, sumará 1 (y se añadirá un nuevo coche).
    for (i = 0; i < marcasCoches.length; i++) {
        // Creo una variable que instancia nuevos coches, para sacar la marca de coche, muestra la marca de una posición aleatoria, y para
        // mostrar el dueño del coche, selecciona el dueño en la primera posición.
        var coches = new coche(marcasCoches[(Math.floor(Math.random() * marcasCoches.length))], duenyosCoches[0]);
        // Cada vez que se crea un nuevo coche, se elimina el primer dueño de la variable, así el duenyosCoches[0] irá sacando un coche nuevo cada vez.
        duenyosCoches.shift();
        // Muestro los coches por consola.
        console.log(coches);
    }
}