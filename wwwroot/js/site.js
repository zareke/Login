


function validarFormulario(user, mail, pass, fecha, tel, respuesta, textoError, terminos, terminosTexto, ochoContainer, especialContainer, mayuscMinuscContainer, textito, textitoTel, igualdadContainer) {
  if (!terminos.checked)
    terminosTexto.hidden = false; else terminosTexto.hidden = true;

  if (user.value.length == 0 || mail.value.length == 0 || pass.value.length == 0 || fecha.value.length == 0 || tel.value.length == 0 || respuesta.value.length == 0) {
    textoError.hidden = false
    return false
  } else if (!terminos.checked || (!ochoContainer.checked || !especialContainer.checked || !mayuscMinuscContainer.checked || !igualdadContainer.checked) || window.getComputedStyle(textito).display != "none" || window.getComputedStyle(textitoTel).display !="none") {
    textoError.hidden = true
    return false
  }
  else {
    textoError.hidden = true
    return true;
  }

}
function MostrarContraseña(mostrar,con2, contraseña){
if(mostrar.checked){
  contraseña.type = "text"
  con2.type = "text"
}else{
  contraseña.type = "password"
  con2.type = "password"
}
}

function ValidacionContraseña(password, ochoContainer, especialContainer, mayuscMinuscContainer,con2,igualdadContainer) {

  const carEspeciales = ['*', '#', '!', '`', '!', '@', '#', '$', '%', '^', '&', '*', '_', '+', '(', ')', '&', '"', '/', '=']
  let carEspecialF = false, mayorOcho = false, mayusc = false, minusc = false, igual=false

  if (carEspeciales.some(x => {
    return password.value.includes(x);
  })) carEspecialF = true
  const isAnyUpper = string => /\p{Lu}/u.test(string)
  function hasLowerCase(str) {
    return (/[a-z]/.test(str));
}
if(isAnyUpper(password.value))mayusc=true
  if(hasLowerCase(password.value))minusc=true
  if (password.value.length >= 8) {
    mayorOcho = true;
  }
  if(con2.value == password.value){
    igual = true
  }
  //Cambio de estilo
  if (!mayorOcho) {
    ochoContainer.style.backgroundColor = "red"
    ochoContainer.checked = false
  } else {
    ochoContainer.style.backgroundColor = "green"
    ochoContainer.checked = true
  }
  if (!carEspecialF) {
    especialContainer.style.backgroundColor = "red"
    especialContainer.checked = false
  } else {
    especialContainer.style.backgroundColor = "green"
    especialContainer.checked = true
  }
  if (!mayusc || !minusc) {
    mayuscMinuscContainer.style.backgroundColor = "red"
    mayuscMinuscContainer.checked = false
  } else {
    mayuscMinuscContainer.style.backgroundColor = "green"
    mayuscMinuscContainer.checked = true
  }
  if(!igual){
    igualdadContainer.style.backgroundColor = "red"
    igualdadContainer.checked = false
  }else{
    igualdadContainer.style.backgroundColor = "green"
    igualdadContainer.checked = true
  }
}


function ValidarNacimiento(fechaNacimiento, textito) {
  const año = new Date().getFullYear()
  const nacimiento = new Date(fechaNacimiento.value)
  nacimiento.setHours(24, 0o0, 0o0, 0o0)
  añoNacimiento = nacimiento.getFullYear()
  if (año - añoNacimiento < 5 || año - añoNacimiento > 110)
    textito.hidden = false
  else {
    textito.hidden = true
  }
}




function ValidarTelefono(telefono, textitoTel) {

  if (telefono.value.length !=10) {
    textitoTel.hidden = false
  } else {
    textitoTel.hidden = true
  }
}