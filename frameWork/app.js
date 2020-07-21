var g = G$('dharma','durai',);
g.greet().setLang('es').greet(true).log();
$('#login').click(function() {
    var loginGrtr = G$('dharma','durai');
    $('.logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLgreeting('#greeting',true).log();
});


