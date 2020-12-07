import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import '../CheckoutMessage/checkout-message.css'
import { useHistory } from 'react-router-dom';


export default function CheckoutMessage({idFromItem}) {

    const history = useHistory();

    const cheoutHandler =() =>{
        history.push('/');
    }

    return (
        <>
            <div className="alert-container">
                <Alert variant="success">
                    <Alert.Heading>Su compra ha sido realizado con exito</Alert.Heading>
                    <p>
                        Felicidades!! su <strong>id</strong> de compora es: <strong>{idFromItem}</strong>
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={cheoutHandler} variant="outline-success">
                            Comenzar una nueva compra
                        </Button>
                    </div>
                </Alert>
            </div>
        </>
    )
}
