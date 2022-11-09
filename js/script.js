/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */




// devo creare un ciclo for per numeri da 1 a 50
for(let i = 1; i <= 50; i++){
    
    let contenitore = document.querySelector(".container");
    let element = document.createElement("div");
    element.classList.add("box");
    contenitore.append(element);

    // creo le condizioni:
    if(i % 3 === 0 && i % 5 === 0){
        element.append("FizzBuzz");
    }else if(i % 3 === 0){
        // let fizz = "Fizz";
        element.append("Fizz");
    }else if(i % 5 === 0 ){
        // let buzz = "Buzz";
        element.append("Buzz");
    }else{
        element.append(i);
    }
    

    
};

 