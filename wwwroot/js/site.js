

function validarFormulario(password) 
{
  const carEspeciales = ['*', '#', '!', '`', '!', '@', '#', '$', '%', '^', '&', '*', '_', '+', '(', ')','&','"','/','='
]
  event.preventDefault()
  //Validacion de la contraseña
  let carEspecialF = false, mayorOcho = false, mayusc = false, minusc = false;

  for (let i = 0; i < password.value.length; i++) {
    if (carEspeciales.find(x => x == password.value[i])) {
      carEspecialF == true
    }
    if(password.value[i] == password.value[i].toUpperCase() && !mayusc){
      mayusc = true;
    }
    if(password.value[i] == password.value[i].toLowerCase() && !minusc){
      minusc = true;
    }
  }
  if (password.value.length >= 8) {
    mayorOcho = true;
  }
  //Cambio de estilo
  if(!carEspecialF){
    alert("caracter especial")
  }
  if(!mayorOcho){
    alert("password no mayor a 8")
  }
  if(!mayusc && minusc){
    alert("mayuscula")
  }

  return true
}
