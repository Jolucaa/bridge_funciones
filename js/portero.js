(() => {
"use strict";
// 2.- Hacer una función a la que le pasemos un nombre y una edad y nos devuelva un saludo y si es o no mayor de edad
// portero('Ana',13)-->'Hola Ana, eres menor de edad, no puedes pasar'
    function portero(nombre, edad) {
        let edadMessage = Number(edad) >= Number(18) ? `eres mayor de edad, puedes pasar` : `eres menor de edad, no puedes pasar`;
        return `Hola ${nombre}, ${edadMessage}`;
    }

    console.log(portero('Ana', 13));
    console.log(portero('Eva', 19));
})();

