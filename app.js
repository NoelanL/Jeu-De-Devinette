let userSend = document.getElementById('envoie');
let button = document.getElementById('verifiResult');
let lastDiv = document.getElementById('lastDiv');
let numberTry = 0;
let randomNumber = Math.random() * 101;
randomNumber = Math.trunc(randomNumber);
console.log(randomNumber);



function button1 () {

    let input = document.getElementById('inputNumber').value;
    input = parseInt(input);
    numberTry++;

    if (input > randomNumber){
        textSend("Ton chiffre est haut");
    }
    if (input < randomNumber){
        textSend("Ton chiffre est bas");
    }
    if (input === randomNumber){
        alert("Bien jouer t'a trouver le bon chiffre, en " + numberTry + " essais. T'es heureux ?");
    }
    if (isNaN(input)){
        textSend("Tu n'a pas insérer de chiffre, essaie au moins !");
    }
    if (numberTry === 10){
        alert("Tu n'a pas réussi a trouver le chiffre, c'était " + randomNumber);
        location.reload();
    }

    for (let i = 0; i < input; i++){
        let numberUsed = document.createElement('li');
        numberUsed.innerHTML = "Tu as déjà utilisé " + document.getElementById('input').value;
        numberUsed.style.color = 'blue';
        userSend.item(i).append(numberUsed);
    }
}

button.addEventListener('click', button1);

function textSend (text){
    let textSend = document.createElement('p');
    textSend.innerHTML = text;
    lastDiv.append(textSend);
}