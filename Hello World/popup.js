$(function(){
    $('#name').keyup(function(){
        $('#gret').text('Hello' +$('#name').val());
    })
})