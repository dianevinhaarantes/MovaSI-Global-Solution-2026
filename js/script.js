
/*
========================================
MOVASI - MOBILIDADE INTELIGENTE
Seu movimento gera MovimentAÇÃO.
========================================

ETAPA 4 - INTERAÇÕES DE LOGIN E CADASTRO

Nesta etapa, os formulários funcionam
como demonstração visual.

Nenhuma conta é criada e nenhum dado
pessoal ou senha é armazenado.
========================================
*/

// ELEMENTOS DA PÁGINA

const telaLogin = document.getElementById("tela-login");

const telaCadastro = document.getElementById("tela-cadastro");

const botaoCadastro = document.getElementById("abrir-cadastro");

const botaoVoltar = document.getElementById("voltar-login");

const botaoEsqueciSenha = document.getElementById("esqueci-senha");

const formularioLogin = document.getElementById("form-login");

const formularioCadastro = document.getElementById("form-cadastro");

const mensagemSistema = document.getElementById("mensagem-sistema");


// 1 - MOSTRAR MENSAGENS AO USUÁRIO

function mostrarMensagem(texto, tipo = "informacao") {

    mensagemSistema.textContent = texto;

    mensagemSistema.className = "mensagem-sistema mensagem-" + tipo;
}


// 2 - ABRIR A TELA DE CADASTRO

botaoCadastro.addEventListener("click", function () {

    telaLogin.hidden = true;

    telaCadastro.hidden = false;

    mostrarMensagem("");

    document.getElementById("cadastro-nome").focus();

});


// 3 - VOLTAR PARA A TELA DE LOGIN

botaoVoltar.addEventListener("click", function () {

    telaCadastro.hidden = true;

    telaLogin.hidden = false;

    mostrarMensagem("");

    document.getElementById("login-email").focus();

});


// 4 - VALIDAR O FORMULÁRIO DE CADASTRO

formularioCadastro.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = document.getElementById("cadastro-nome").value.trim();

    const nascimento = document.getElementById("cadastro-nascimento").value;

    const email = document.getElementById("cadastro-email").value.trim();

    const senha = document.getElementById("cadastro-senha").value;

    const confirmarSenha = document.getElementById("cadastro-confirmar").value;


    // CONFERIR O NOME

    if (nome.length < 3) {

        mostrarMensagem(
            "Informe seu nome completo.",
            "erro"
        );

        return;
    }


    // CONFERIR A DATA DE NASCIMENTO

    if (!nascimento) {

        mostrarMensagem(
            "Informe sua data de nascimento.",
            "erro"
        );

        return;
    }

    const dataNascimento = new Date(nascimento + "T12:00:00");

    const hoje = new Date();

    if (
        Number.isNaN(dataNascimento.getTime()) ||
        dataNascimento > hoje
    ) {

        mostrarMensagem(
            "Informe uma data de nascimento válida.",
            "erro"
        );

        return;
    }


    // CONFERIR O E-MAIL

    if (!email.includes("@")) {

        mostrarMensagem(
            "Informe um e-mail válido.",
            "erro"
        );

        return;
    }


    // CONFERIR O TAMANHO DA SENHA

    if (senha.length < 8) {

        mostrarMensagem(
            "A senha precisa ter pelo menos 8 caracteres.",
            "erro"
        );

        return;
    }


    // CONFERIR SE AS SENHAS SÃO IGUAIS

    if (senha !== confirmarSenha) {

        mostrarMensagem(
            "As senhas não coincidem. Tente novamente.",
            "erro"
        );

        return;
    }


    // FORMULÁRIO VALIDADO

    mostrarMensagem(
        "Dados validados! O cadastro real será ativado na integração com o sistema de autenticação. Nenhuma conta foi criada.",
        "sucesso"
    );

});


// 5 - FORMULÁRIO DE LOGIN

formularioLogin.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const email = document.getElementById("login-email").value.trim();

    const senha = document.getElementById("login-senha").value;

    if (!email || !senha) {

        mostrarMensagem(
            "Preencha seu e-mail e sua senha.",
            "erro"
        );

        return;
    }

    mostrarMensagem(
        "Login demonstrativo. A autenticação estará disponível após conectarmos o backend.",
        "informacao"
    );

});


// 6 - RECUPERAÇÃO DE SENHA

botaoEsqueciSenha.addEventListener("click", function () {

    mostrarMensagem(
        "A recuperação de senha será disponibilizada após a integração do serviço de autenticação.",
        "informacao"
    );

});


// 7 - INICIALIZAÇÃO

console.log("MovaSI: interface carregada com sucesso.");
