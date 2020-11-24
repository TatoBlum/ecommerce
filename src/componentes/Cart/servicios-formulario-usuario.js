const validarCamposNuevoUsuario = async  (data, formErrorHandler) => {
    
    const {  email, reEmail  } = data;
    
    let errores = [];
    
    //chequer q email y reemail sean el mismo mail
    if (email !== reEmail) {
        errores.push({
            mensaje: "Los mails no coinciden"
        });

        let [{mensaje:texto}] = errores;

        formErrorHandler(texto)
        return errores
    }
    
    return true;
};


export default validarCamposNuevoUsuario;



/*
const validarCamposNuevoUsuario = async  (data) => {
    
    const { nombre, email, reEmail , telefono } = data;
    
    let errores = [];
    
    //check si hay campos vacios
    if (!nombre || !email || !telefono || !reEmail ) {
        errores.push({
            mensaje: "Faltan completar campos",
        });
    }
    //check nombre solo letras
    if (!/^[a-z]+$/i.test(nombre)) {
        errores.push({ mensaje: "Nombre solo acepta letras" 
        });
    }

    if (nombre.length < 6) {
        errores.push({
            mensaje: "El nombre debe tener al menos 3 caracteres",
        });
    }

    //validar un email real
    if (!email.includes(".com")) {
        errores.push({
            mensaje: "No ingresastre un email válido"
        });
    }

    //chequer q email y reemail sean el mismo mail
    if (email.value === reEmail.value) {
        errores.push({
            mensaje: "Los mails no coinciden"
        });
    }

    //validar telefono de 9 digitos
     if ( !(/^\d{9}$/.test(telefono)) ) {
        errores.push({
            mensaje: "Telefono solo acepta numeros"
        });
    }
    
    return errores;
};
*/