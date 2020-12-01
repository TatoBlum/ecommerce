import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import '../CartForm/cartForm.css';

export default function CartForm({ handleSubmit, toggleShowA, validation, validationErr, inputs }) {

    const [ nombre , mail, reMail, telefono ] = inputs  
    
    const [nombreInput] = nombre
    const [emailInput] = mail
    const [reEmailInput] = reMail
    const [telefonoInput] = telefono

    let errorTexto = null;
    let errorMail = null;
    let errTelefono = null;

    const formErrorsHandler = (errors) => {
        return errors.forEach( e => {
    
                if (e.mensaje.textEr) {
                    errorTexto = e.mensaje.textEr;
                }
                if (e.mensaje.errEmail) {
                    errorMail = e.mensaje.errEmail;
                }
                if (e.mensaje.errTel) {
                    errTelefono = e.mensaje.errTel;
                }     
            })
        
    }

    if (validationErr.length > 0) {
        const [arr] = validationErr;
        //console.log(arr)
        formErrorsHandler(arr);
    }

    return (
        <>
            <div className="form-main-container">
                <Form noValidate validated={validation} style={{ width: "60%" }} onSubmit={handleSubmit}>

                    <Form.Group controlId="nameAndLastname">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control 
                                isInvalid={errorTexto} 
                                {...nombreInput} 
                                placeholder="Ingrese su nombre completo" />
                        <Form.Text className="text-muted">
                            Ingrese su nombre y apellido.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">{errorTexto}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group controlId="formBasicEmail" style={{ width: "45%" }}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                isInvalid={errorMail} 
                                {...emailInput} 
                                placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                Ingrese su mail.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">{errorMail}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" style={{ width: "45%" }}>
                            <Form.Label>Re ingrese su Email</Form.Label>
                            <Form.Control 
                                isInvalid={errorMail} 
                                {...reEmailInput} 
                                placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                Ingrese su mail.
                        </Form.Text>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid">{errorMail}</Form.Control.Feedback>
                    </Form.Row>

                    <Form.Group controlId="formtelephone">
                        <Form.Label>Numero de telefono de contacto</Form.Label>
                        <Form.Control 
                            isInvalid={errTelefono} 
                            {...telefonoInput}
                            placeholder="Telefono" />
                        <Form.Text className="text-muted">
                            Ingrese un numero de telefono de 10 digitos(ej. 1157770000).
                        </Form.Text>    
                        <Form.Control.Feedback type="invalid">{errTelefono}</Form.Control.Feedback>
                    </Form.Group>

                    <Row style={{ justifyContent: "space-around" }}>
                        <Button onClick={toggleShowA} variant="secondary" type="cancel">
                            Cancelar
                        </Button>
                        <Button 
                                variant="primary"
                                type="submit">
                                Submit
                        </Button>
                    </Row>

                </Form>
            </div>
        </>
    )
}
