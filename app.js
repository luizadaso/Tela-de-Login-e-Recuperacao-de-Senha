let campoEmail = document.getElementById('email');
let campoSenha = document.getElementById('senha');
var buttonEntrar = document.getElementById('buttonEntrar');
var textoEmailSenhaInvalido = document.getElementById('textoEmailSenhaInvalido');
var textoEmailInvalido = document.getElementById('textoEmailInvalido');
var recuperarSenha = document.getElementById('recuperarSenha');
var formRecuperacao = document.getElementById('formRecuperacao');
var cancelarRecuperacao = document.getElementById('cancelarRecuperacao');
var buttonRecuperar = document.getElementById('buttonRecuperar');
var formLogin = document.getElementById('formLogin');
var campoEmailRecuperacao = document.getElementById('emailRecuperacao');

// Função para validação de entrada: E-mail e senha
buttonEntrar.addEventListener('click', function() {
    var valorEmail = campoEmail.value;
    var valorSenha = campoSenha.value;

    if (valorEmail.length >= 3 && valorEmail.indexOf("@") >= 0 && valorSenha.length > 0) {
        alert("E-mail e senha preenchidos corretamente");
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

// Função para validar campo de e-mail na tela de recupação de senha
buttonRecuperar.addEventListener('click', function(event) {
    event.preventDefault();
    var valorEmail = campoEmailRecuperacao.value;
    if (valorEmail.length >= 3 && valorEmail.indexOf("@") >= 0) {
        alert("E-mail preenchido corretamente");
    } else {
        const EmailInvalido = "E-mail inválido.";
        textoEmailInvalido.textContent = EmailInvalido;
        textoEmailInvalido.style.display = 'block';
    }
});

// Função para ocultar o formulário de recuperação de senha
cancelarRecuperacao.addEventListener('click', function() {
    formRecuperacao.style.display = 'none';
    formLogin.style.display = 'block';
});