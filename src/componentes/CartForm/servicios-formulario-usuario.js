const validarCamposNuevoUsuario = async  (data, formErrorHandler) => {
    
    // nombre: nameInput.value,
    // email: emailInput.value,
    // reEmail: reEmailInput.value,
    // telefono: telefonoInput.value,

    const { nombre,  email, reEmail, telefono } = data;

    // console.log(data.nombre)
    
    let errores = [];

    //chequear length de nombre 
    if (nombre.length < 3) {
        errores.push({
            mensaje: {
                textEr: "El nombre debe tener al menos 3 caracteres",
            }
        });
    }
    
    //chequer q email y reemail sean el mismo mail
    if (email !== reEmail) {
        errores.push({
            mensaje: {
                errEmail: "Los mails no coinciden"
            }
        });
    }

    //campos mails incompletos
    if (!email || !reEmail) {
        errores.push({
            mensaje: {
                errEmail: "Falta completar campo"
            }
        });
    }

    if (!(/^\d{10}$/.test(telefono))) {
        errores.push({
            mensaje: {
                errTel: "Ingrese un numero de telefono válido"
            }
        });
    }

    if (errores.length > 0) {
        formErrorHandler(errores)
        return errores
    }
    
    return true;
};


export default validarCamposNuevoUsuario;





