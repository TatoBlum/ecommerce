import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import '../CartForm/cartForm.css';


export default function CartForm( { handleInputChange, handleSubmit, toggleShowA }) {

    return (
        <>
        <div style={{
            width: "100%",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            }}>
            <Form style={{width: "60%"}} onSubmit={handleSubmit}>
                <Form.Group controlId="nameAndLastname">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control onChange={handleInputChange} name="nombre" type="name" placeholder="Ingrese su nombre completo" />
                    <Form.Text className="text-muted">
                        Ingrese su nombre y apellido.
                    </Form.Text>
                </Form.Group>

                <Form.Row>
                    <Form.Group controlId="formBasicEmail" style={{width: "45%"}}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleInputChange} name="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Ingrese su mail.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" style={{width: "45%"}}>
                        <Form.Label>Re ingrese su Email</Form.Label>
                        <Form.Control onChange={handleInputChange} name="reEmail" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Ingrese su mail.
                        </Form.Text>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formtelephone">
                    <Form.Label>Numero de telefono de contacto</Form.Label>
                    <Form.Control onChange={handleInputChange} name="telefono" type="telephone" placeholder="Telefono" />
                </Form.Group>

                <Row style={{justifyContent: "space-around"}}>
                <Button onClick={toggleShowA} variant="secondary" type="cancel">
                    Cancelar
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Row>
            </Form>
        </div>    
        </>
    )
}
