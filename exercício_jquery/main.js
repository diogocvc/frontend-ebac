$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#adicionar-tarefa').val();
        const tarefaNaLista = $('<li></li>');

        $(`<li>${novaTarefa}</li>`).appendTo(tarefaNaLista);

        $(tarefaNaLista).appendTo('ul');
        $('#adicionar-tarefa').val('');
    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('concluida')
    })
})