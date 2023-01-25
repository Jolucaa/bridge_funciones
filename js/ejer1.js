// 1.- Hacer una función a la que le pasemos un número y nos devuelva la suma desde uno hasta ese número
// sumatorio(5)-->1+2+3+4+5=15

(function() {
    "use Strict";
    function reader(numbersNeeded){
        let neededInputs = numbersNeeded;
        let inputtedNumber = [];
        do{

            let input = NaN;
            do{
                input = Number(prompt('Introduce un numero'));
            }while (Number.isNaN(input))

            inputtedNumber.push(Number(input));
        }while (neededInputs!==inputtedNumber.length)
        return inputtedNumber;
    }

    function sumatorio(_endNumber){
        const endNumber = Number(_endNumber.shift()).valueOf();
        let contador = 1;
        for (let index = Number(0).valueOf(); index <= endNumber; index++) {
            contador += contador;
        }
        return contador;
    }

    console.log(sumatorio(reader(1)));
})();