
/*
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma 

    N.B. dobbiamo non considerare gli spazi e le lettere maiuscole, quindi ad es.
    "a Toyota" è palindroma.

    N.B.2: non si può utilizzare Array.reverse()!
*/


function checkPalindrome(string){

    string = removeWhiteSpaces(string.trim().toLowerCase());
    console.log(string);
    let endIndex = Math.ceil(string.length / 2);  /* ricordarsi sempre che si parte da 0 */

    /* funziona sia per stringhe pari che dispari */
    
    for (let i = 0; i < endIndex; i++ ){ /* confronta caratteri in posizioni complementari */

        console.log("i= " + i);
        console.log(string[i]);
        console.log(string[string.length - 1 - i]);
        if (string[i] != string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}


/* meno efficiente della precedente */
function checkPalindrome2(string){

    string = removeWhiteSpaces(string.trim().toLowerCase());
    let reversedString = reverseString(string);
    return (reversedString === string);
}


/* come la precedente ma meno efficiente, per via di array + pop() */
function checkPalindrome3(string){

    string = string.trim().toLowerCase();
    let strArr = string.split(""); /*  string split("") -> array di char */
    string = removeWhiteArrCells(strArr).join("");
    let reversedString = reverseString(string);
    return (strReversed === string);
}



/*********************** 
  FUNZIONI DI UTILITA' 
**********************/


function reverseStringForbidden(strArr){
    return strArr.reverse().join("");  /* non si può usare! */
}

function reverseString(string){

    let reversedString = "";
    let lastIndex = string.length-1;

    for (let i = lastIndex; i = 0; i--){
        reversedString[lastIndex - i] = string[i];
    }
    return reversedString;
}

function removeWhiteSpaces(string){
    let filteredString = "";
    for(let i = 0; i < string.length; i++){
        if (string[i] != " "){
            filteredString += string[i];
        }
    }
    return filteredString;
}

function removeWhiteArrCells(strArr){

    for(let i = 0; i < strArr.length; i++){
        if (strArr[i] == ""){
            strArr[i].pop();  //removes white spaces;
        }
    }
    return strArr;
}


/*********************** 
        MAIN
**********************/

function main (){

    var userString = prompt("Controllo stringhe palindrome. Inserisci una stringa per la verifica");
    if (checkPalindrome(userString)){
        alert('La stringa "' + userString + '" è palindroma');
    }
    else {
        alert('La stringa "' + userString + '" non è palindroma');
    }
}

main();