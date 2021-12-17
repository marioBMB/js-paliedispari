/*
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/


const select = document.getElementById("even-odd");
const numberBox = document.getElementById("number");
const submitBtn = document.getElementById("submit");
const input = document.getElementById('user-number');



function main(userChoice){
    
    const userNumber = parseInt(document.getElementById('user-number').value);
    if (1 < userNumber && userNumber < 5) {
    
        const pcNumber = getRandomNumber(1,5);
        const sum = userNumber + pcNumber;
        
        let odd = checkEqualOdd(sum);
        console.log("odd: "+ odd);
        console.log("userChoice: "+ userChoice);
        let message = "";
        
        odd ? message = "PARI!" : message = "DISPARI!";
        message += "\n Utente: "+userNumber +" Pc: "+pcNumber + ". Tot: "+sum + "\n";
        userChoice == odd ? message += "HAI VINTO!" :  message += "HAI PERSO!";
        alert(message);
    }
    else {
        input.classList.add("error");
        alert("Inserisci un numero compreso tra 1 e 5");
    }
}


function getRandomNumber(rmin, rmax){
    return Math.floor(Math.random()* (rmax - rmin + 1)) + rmin;
}

function checkEqualOdd(number){
    return (number % 2 != 0);
}


select.addEventListener("change", function(event){

    var evenOdd = select.options[select.selectedIndex].value;

    if (evenOdd != '-1'){
        let selectedOption = evenOdd;
        numberBox.classList.add("active");
        submitBtn.addEventListener("click", function(event){
            main(selectedOption);
        });
    }
});