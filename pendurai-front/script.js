function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "adeus" && senha == "adeus") {
    alert("Sucesso");
    //da pra redirecionar aqui pra algum lugar = location.href="... .html";
  }else{
    alert("Usuário ou senha incorretos");
    }
  
}
