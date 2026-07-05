document.addEventListener('DOMContentLoaded', function() {
    const saudacaoBtn = document.getElementById('saudacaoBtn');
    if (saudacaoBtn) {
        saudacaoBtn.addEventListener('click', function() {
            alert('Olá! Bem-vindo(a) ao meu portfólio!');
        });
    }
});
