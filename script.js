function validar() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let comentario = document.getElementById("comentario");
  var error = document.getElementById("error");
  error.style.color = "red";

  var msgErro = [];

  console.log("clicou");

  error.style.color = "red";

  if (nome.value == "") {
    alert("Campo vacio, Digite um nome");
    document.getElementById("nome").focus();
  }

  if (email.value == "") {
    alert("Campo vacio, Digite um email");
    document.getElementById("email").focus();
  }
  if (comentario.value == "") {
    alert("Campo vacio, Digite um comentario");
    document.getElementById("comentario").focus();
  } else {
    alert("Formulario enviado!!");
    document.getElementById("form").reset();
  
  }
  error.innerHTML = msgErro.join("--");

  return false;
}
