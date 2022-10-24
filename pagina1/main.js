/* 
!Mail
?Chiedi all’utente la sua email, controlla che sia già presente nella lista di email per controllare se può accedere, stampa un messaggio appropriato sull’esito del controllo. 
*/


let inputEmailElement = document.getElementById('inputMail');

function logInFunction() {

    let emailValue = inputEmailElement;

    let emailRegistrate = ["laemail1@gmail.com" , "laemail2@gmail.com" , "laemail3@gmail.com"];

    for (let i = 0; i < emailRegistrate; i++) {

        console.log(emailRegistrate[i]);
    }
    
    if (emailValue = emailRegistrate){

        

    }



}

