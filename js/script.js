'use strict'
//1. Creare un ciclo da 1 a 100
//2. Per ogni numero:
//   -se è multiplo di 3 e di 5 --> stampare "FizzBuzz"
//   -altrimenti si è multiplo di 3 --> stampare "Fizz"
//   -altrimenti se è multiplo di 5 --> stampare "Buzz"
//   -altrimenti stampare il numero


// ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {  
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) { // logica multipli di 3 
        console.log('Fizz'); // stampa Fizz al posto dei multipli di 3
    }
    else if (i % 5 === 0){ // logica multipli di 5
        console.log('Buzz'); // stampa Buzz al posto dei multipli di 5
    }
    // se il numero non è multiplo di 3 o di 5, stampa il numero
    else {
        console.log(i); // stampa il numero originale
        
    }
    


}

