let buttonVerifie = document.getElementById('verifiResult');

buttonVerifie.addEventListener("click", function (){
    let paraResult = document.createElement('p');
    let divResult = document.getElementById('listeChiffreutilise');
    let input = document.getElementById('inputNumber').value;
    paraResult.innerHTML = input.value;
})