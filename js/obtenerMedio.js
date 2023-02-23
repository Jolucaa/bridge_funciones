(() => {
    "use strict";
// 3.- Hacer una función a la que le pasemos tres números y nos devuelva el del medio
// medio(1,2,3)->2
// medio(8,1,90)->8
    function medio(numberOne, numberTwo, numberTree) {
        let dataToSort = [numberOne,numberTwo,numberTree];
        if(!estaOrdenado(dataToSort[0],dataToSort[1],dataToSort[2])){
            dataToSort.sort((a,b) => {
                let order = 0;
                if (isMayor(a, b)) {
                    order = 1;
                } else if (isMayor(b, a)) {
                    order = -1;
                }
                return order;
            });
        }
        return dataToSort[1];
    }

    function estaOrdenado(primero, segundo, tercero) {
        return isMayor(primero, segundo) && isMayor(segundo, tercero);
    }

    function isMayor(primero, segundo) {
        return primero < segundo;
    }
    console.log(medio(1,2,3));
    console.log(medio(8,1,90));
    console.log(medio(47,124,90));
})();