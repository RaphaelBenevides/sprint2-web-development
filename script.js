// CRIAR CONTA

document.getElementById("criarContaBtn").addEventListener("click", function () {

  const nome = document.getElementById("novoNome").value;
  const email = document.getElementById("novoEmail").value;
  const senha = document.getElementById("novaSenha").value;

  if (nome === "" || email === "" || senha === "") {
    alert("Preencha todos os campos!");
  }
  else {

    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    document.getElementById("mensagemConta").innerText =
      "Conta criada com sucesso!";
  }

});


// LOGIN

document.getElementById("loginBtn").addEventListener("click", function () {

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const emailSalvo = localStorage.getItem("email");
  const senhaSalva = localStorage.getItem("senha");

  if (email === "" || senha === "") {
    alert("Preencha os campos!");
  }
  else if (email === emailSalvo && senha === senhaSalva) {
    alert("Login realizado com sucesso!");
  }
  else {
    alert("Email ou senha incorretos!");
  }

});


// SLIDESHOW

const imagens = [
  "./images/img1.png",
  "./images/img2.png",
  "./images/img3.png"
];

let indice = 0;

const slide = document.getElementById("slide");

document.getElementById("trocarImagem").addEventListener("click", function () {

  indice++;

  if (indice >= imagens.length) {
    indice = 0;
  }

  slide.src = imagens[indice];

});


// EVENTOS DOM

const botaoCor = document.getElementById("botaoCor");
const texto = document.getElementById("texto");

botaoCor.addEventListener("mouseover", function () {

  botaoCor.style.backgroundColor = "green";
  texto.innerText = "Você passou o mouse no botão!";

});

botaoCor.addEventListener("mouseout", function () {

  botaoCor.style.backgroundColor = "#2563eb";
  texto.innerText = "Texto original";

});


// MANIPULAÇÃO DE STRING

const mostrarNome = document.getElementById("mostrarNome");

mostrarNome.addEventListener("click", function () {

  const nome = document.getElementById("nome").value;

  if (nome === "") {
    alert("Digite um nome!");
  }
  else {

    const nomeMaiusculo = nome.toUpperCase();

    document.getElementById("resultadoNome").innerText =
      "Olá, " + nomeMaiusculo + "!";
  }

});
