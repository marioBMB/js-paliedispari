/*
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/


let select = document.getElementById("even-odd");
const numberBox = document.getElementById("number");
const submitBtn = document.getElementById("submit");
let input = document.getElementById('user-number');
let selectedOption = "-1";
let userNumber = 0;
let sum = 0;
let pcNumber;


select.addEventListener("change", function(event){

    var evenOdd = select.options[select.selectedIndex].value;

    if (evenOdd != '-1'){
       selectedOption = evenOdd;
       numberBox.classList.add("active");

        submitBtn.addEventListener("click", function(event){
            userNumber = document.getElementById('user-number').value;
            main();
        });
    }
});


function main (){

    pcNumber = getRandomNumber(1,5);
    sum = userNumber + pcNumber;
    message = "Utente: "+userNumber + " Pc: "+pcNumber + ". Tot: "+sum;
    even = checkEqualEven(sum); 

    if (even){
        message = "PARI! " + message;
    }
    else {
        message = "DISPARI! "+ message;
    }

    message += "<br>";

    if (selectedOption == even){
        message += "HAI VINTO!";
    }
    else {
        message += "HAI PERSO!";
    }
    
}




function getRandomNumber(rmin, rmax){

    return Math.floor(Math.random()* (rmax - rmin + 1)) + rmin;
}

function checkEqualEven(number){

    return number % 2 == 0;
}
