/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */


let contenitore = document.querySelector(".container");

// devo creare un ciclo for per numeri da 1 a 50
for(let i = 1; i <= 50; i++){
    
    let element = document.createElement("div");
    element.classList.add("box");
    contenitore.append(element);

    // creo le condizioni:
    if(i % 3 === 0 && i % 5 === 0){
        element.append("FizzBuzz");
        element.classList.add("fizzBuzz")
    }else if(i % 3 === 0){
        element.append("Fizz");
        element.classList.add("fizz");
    }else if(i % 5 === 0 ){
        element.append("Buzz");
        element.classList.add("buzz");
    }else{
        element.append(i);
    }
};

 