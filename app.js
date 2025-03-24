let campoEmail = document.getElementById('email');
let campoSenha = document.getElementById('senha');
var buttonEntrar = document.getElementById('buttonEntrar');
var textoEmailSenhaInvalido = document.getElementById('textoEmailSenhaInvalido');

buttonEntrar.addEventListener ('click', function(){
    var valorEmail = campoEmail.value;
    var valorSenha = campoSenha.value;

    if (valorEmail.length >= 3 && valorEmail.indexOf("@") >= 0) {
        console.log("E-mail preenchido corretamente");

        if (valorSenha.length > 0) {
            console.log("E-mail e senha preenchidos corretamente");
            textoEmailSenhaInvalido.style.display = 'none';
        }else {
            ErroEmailSenhaInvalido();
        }
    }else {
        ErroEmailSenhaInvalido();
    }
})

function ErroEmailSenhaInvalido() {
    const EmailSenhaInvalido = "E-mail ou senha inválidos.";
    textoEmailSenhaInvalido.textContent = EmailSenhaInvalido;
    textoEmailSenhaInvalido.style.display = 'block';
}