
/*
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma 

    N.B. dobbiamo non considerare gli spazi e le lettere maiuscole, quindi ad es.

    "a Toyota" è palindroma.

    N.B.2: non si può utilizzare Array.reverse()!
*/


function checkPalindrome(string){

    string = removeWhiteSpaces(string.trim().toLowerCase());
    let lastIndex = Math.ceil(string.length / 2);  /* ricordarsi sempre che si parte da 0 */

    /* funziona sia per stringhe pari che dispari */
    
    for (let i = 0; i < lastIndex; i++ ){ /* confronta caratteri in posizioni complementari */
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


/* come la precedente ma meno efficiente, per via del pop() */
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
    let whiteSpaces = 0;

    for(let i = 0; i < string.length; i++){
        if (string[i] == ""){
            whiteSpaces++;
            string[i] = string[i+1];  //shift sinistro
        }
    }
    string = string.substring(0, str.length - whiteSpaces);
    return string;
}

function removeWhiteArrCells(strArr){

    for(let i = 0; i < strArr.length; i++){
        if (strArr[i] == ""){
            strArr[i].pop();  //removes white spaces;
        }
    }
    return strArr;
}