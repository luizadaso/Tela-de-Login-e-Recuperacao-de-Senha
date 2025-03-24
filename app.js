let campoEmail = document.getElementById('email');
let campoSenha = document.getElementById('senha');
var buttonEntrar = document.getElementById('buttonEntrar');
var textoEmailSenhaInvalido = document.getElementById('textoEmailSenhaInvalido');
var recuperarSenha = document.getElementById('recuperarSenha');
var formRecuperacao = document.getElementById('formRecuperacao');
var cancelarRecuperacao = document.getElementById('cancelarRecuperacao');

// Função para validação de entrada: E-mail e senha
buttonEntrar.addEventListener('click', function() {
    var valorEmail = campoEmail.value;
    var valorSenha = campoSenha.value;

    if (valorEmail.length >= 3 && valorEmail.indexOf("@") >= 0) {
        console.log("E-mail preenchido corretamente");

        if (valorSenha.length > 0) {
            console.log("E-mail e senha preenchidos corretamente");
            textoEmailSenhaInvalido.style.display = 'none';
        } else {
            ErroEmailSenhaInvalido();
        }
    } else {
        ErroEmailSenhaInvalido();
    }
});

// Função para mensagem de erro dos campos de e-mail e senha
function ErroEmailSenhaInvalido() {
    const EmailSenhaInvalido = "E-mail ou senha inválidos.";
    textoEmailSenhaInvalido.textContent = EmailSenhaInvalido;
    textoEmailSenhaInvalido.style.display = 'block';
}

// Função para mostrar o formulário de recuperação de senha
recuperarSenha.addEventListener('click', function(event) {
    event.preventDefault();
    formRecuperacao.style.display = 'block';
    formLogin.style.display = 'none';
});

// Função para ocultar o formulário de recuperação de senha
cancelarRecuperacao.addEventListener('click', function() {
    formRecuperacao.style.display = 'none';
    formLogin.style.display = 'block';
});