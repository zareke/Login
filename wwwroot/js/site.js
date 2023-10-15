
function UserOMailRepetido(userBool, mailBool, userCheck, mailCheck) {
  console.log(window.getComputedStyle(textito).display == "none")
  if (userBool) userCheck.hidden = false; else userCheck.hidden = true
  if (mailBool) mailCheck.hidden = false; else mailCheck.hidden = true
}

function validarFormulario(user, mail, pass, fecha, tel, respuesta, textoError, terminos, terminosTexto, ochoContainer, especialContainer, mayuscMinuscContainer, textito, textitoTel) {
  if (!terminos.checked)
    terminosTexto.hidden = false; else terminosTexto.hidden = true;

  if (user.value.length == 0 || mail.value.length == 0 || pass.value.length == 0 || fecha.value.length == 0 || tel.value.length == 0 || respuesta.value.length == 0) {
    textoError.hidden = false
    return false
  } else if (!terminos.checked || (!ochoContainer.checked || !especialContainer.checked || !mayuscMinuscContainer.checked) || window.getComputedStyle(textito).display != "none" || window.getComputedStyle(textitoTel).display !="none") {
    textoError.hidden = true
    return false
  }
  else {
    textoError.hidden = true
    return true;
  }

}

function ValidacionContraseña(password, ochoContainer, especialContainer, mayuscMinuscContainer) {

  const carEspeciales = ['*', '#', '!', '`', '!', '@', '#', '$', '%', '^', '&', '*', '_', '+', '(', ')', '&', '"', '/', '=']
  let carEspecialF = false, mayorOcho = false, mayusc = false, minusc = false;

  if (carEspeciales.some(x => {
    return password.value.includes(x);
  })) carEspecialF = true

  for (let i = 0; i < password.value.length; i++) {

    if (!carEspeciales.includes(password.value[i]) && password.value[i] == password.value[i].toUpperCase() && !mayusc) {
      mayusc = true;
    }
    if (!carEspeciales.includes(password.value[i]) && password.value[i] == password.value[i].toLowerCase() && !minusc) {
      minusc = true;
    }
  }
  if (password.value.length >= 8) {
    mayorOcho = true;
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