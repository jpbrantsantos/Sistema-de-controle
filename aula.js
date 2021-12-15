Array= [{
   Usuario:"joao",
   Senha:"pedro"

}]
function login(){
var Usuario = document.getElementById('Usuario').value
var Senha = document.getElementById('Senha').value
var permissao = ''
Array.forEach(usuario => {
   if(Usuario==usuario.Usuario && Senha==usuario.Senha){
      window.location.href = 'sistema.html'
   }else{(alert("Usuário ou senha incorretos"))}
   console.log(permissao)
})
}


  