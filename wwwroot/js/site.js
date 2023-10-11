

function validarFormulario() 
{
  return true;
  event.preventDefault()
  
 

  return true
}


function ValidacionContraseña(password, ochoContainer, especialContainer, mayuscMinuscContainer){
  
const carEspeciales = ['*', '#', '!', '`', '!', '@', '#', '$', '%', '^', '&', '*', '_', '+', '(', ')','&','"','/','='
]
  let carEspecialF = false, mayorOcho = false, mayusc = false, minusc = false;

  if(carEspeciales.some(x => {
    return password.value.includes(x);
  })) carEspecialF=true

  for (let i = 0; i < password.value.length; i++) {
    
    if(!carEspeciales.includes(password.value[i]) && password.value[i] == password.value[i].toUpperCase() && !mayusc){
      mayusc = true;
    }
    if(!carEspeciales.includes(password.value[i]) && password.value[i] == password.value[i].toLowerCase() && !minusc){
      minusc = true;
    }
  }
  if (password.value.length >= 8) {
    mayorOcho = true;
  }
  //Cambio de estilo
  if(!mayorOcho){
    ochoContainer.style.backgroundColor = "red"
    ochoContainer.checked = false
  }else{
    ochoContainer.style.backgroundColor = "green"
    ochoContainer.checked = true
  }
  if(!carEspecialF){
    especialContainer.style.backgroundColor = "red"
    especialContainer.checked = false
  }else{
    especialContainer.style.backgroundColor = "green"
    especialContainer.checked = true
  }
  if(!mayusc || !minusc){
    mayuscMinuscContainer.style.backgroundColor = "red"
    mayuscMinuscContainer.checked = false
  }else{
    mayuscMinuscContainer.style.backgroundColor = "green"
    mayuscMinuscContainer.checked = true
  }
}


function ValidarNacimiento(fechaNacimiento, textito){
const año = new Date().getFullYear()
const nacimiento = new Date(fechaNacimiento.value)
nacimiento.setHours(24,00,00,00)
añoNacimiento = nacimiento.getFullYear()
if(año - añoNacimiento < 5 || año - añoNacimiento > 110)
textito.hidden = false
else{
  textito.hidden = true
}
}




function ValidarTelefono(telefono, textitoTel){

  if(telefono.value.length != 8){
    textitoTel.hidden = false
  }else{
    textitoTel.hidden = true
  }
}