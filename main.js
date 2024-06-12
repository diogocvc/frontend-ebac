var form = document.getElementById('formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    validForm();
});

function validForm(){
    var numberA = document.getElementById('number-a')
    var numA = Number(numberA.value)
    var numberB = document.getElementById('number-b')
    var numB = Number(numberB.value)
    var answer = document.getElementById('resposta')

    if (numB > numA){
        document.querySelector('#resposta').style.display = 'block'
        answer.innerHTML = 'Acertou mizeravi!'
    } else {
        document.querySelector('#resposta').style.display = 'block'
        answer.innerHTML = 'Cuem cuem cueeemmm... Você errou!'
    }
}