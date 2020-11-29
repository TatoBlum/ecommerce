import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../context/cartContext';
import '../Cart/cart.css';
import CartMessage from '../CartMessage/cartMessage';
import * as firebase from 'firebase/app';
import { getFirestore } from '../../firebase/firebase';
import 'firebase/firestore';
import CartForm from '../CartForm/cartForm';
import validarCamposNuevoUsuario from '../CartForm/servicios-formulario-usuario';
import { useHistory } from 'react-router-dom';

function getAmoutItems(cart) {
    let result = 0;

    cart.forEach(e => {
        let totalItemPrice = e.item.price * e.quantity
        result += totalItemPrice
    })

    return result;
}

export default function Cart() {

    const { cart, removeItem, removeAllItems, setDocId } = useCartContext();
    const [cartTotalPrince, setCartTotalPrince] = useState(0);

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    useEffect(() => {
        let res = getAmoutItems(cart);
        setCartTotalPrince(res);
        //console.log(cartTotalPrince)

    }, [cart, cartTotalPrince]);

    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        reEmail: "",
        telefono: "",
    });

    const [datosErrores, setDatosErrores] = useState([]);

    const [validated, setValidated] = useState(false);

    //const [formStatus, setFormStatus] = useState(false);

    const formErrorHandler = (erroresForm) => {
        setDatosErrores([erroresForm]);
        //console.log(erroresEmail);
    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const history = useHistory();


    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        try {
            setDatosErrores([]);
            setValidated(true);
            createOrder();
            updateSotck();    
        } catch (err) {
            console.log(err);
        }

    }

    const createOrder = async () => {
        const newOrder = {
            buyer: datos,
            items: cart.map(e => e),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cartTotalPrince,
        }

        const db = getFirestore();

        const orders = db.collection("orders");

        //validacion de datos
        const resultValidation = await validarCamposNuevoUsuario(datos, formErrorHandler);

        try {
            if (resultValidation.length > 0) {
                setValidated(false)
                return resultValidation.forEach(e => e.mensaje);
            }
            setValidated(true);
            //setFormStatus(true);
            const doc = await orders.add(newOrder);
            console.log('Order created with id: ', doc.id);
            setDocId(doc.id);
            history.push('/checkout/');

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const updateSotck = async () => {
        const db = getFirestore();
        const itemsToUpdate = db.collection('items')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(e => e.item.id));

        const query = await itemsToUpdate.get();
        const batch = db.batch();

        const outOfStock = [];

        query.docs.forEach((docSnapshot, index) => {
            //console.log(docSnapshot.data().stock);
            //console.log(cart[index].quantity);
            //console.log(outOfStock.length);

            if (docSnapshot.data().stock >= cart[index].quantity) {
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[index].quantity });
            } else {
                console.log('out of stock');
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit();
        }

    }

    return (
        <>
            <div
                className="cart-main-container">
                {
                    cart.map((e, index) => {
                        return (
                            <div className="cart-items contenedor" key={index}>
                                <img className="cart-item-img" src={`/img/${e.item.img}`} alt={e.item.description} />
                                <li className="todo-items cart-item-li"> {e.item.name} {e.item.description} ${e.item.price} x {e.quantity} </li>
                                <button onClick={removeItem(e.item.id)} className="trash-btn"><i className="fas fa-trash"></i></button>
                            </div>

                        )
                    })
                }
                {cartTotalPrince > 0 ?
                    <>
                        <div className="cart-items footer">
                            <Button
                                onClick={removeAllItems}
                                className="cart-item-remove-all-btn">
                                Borrar todos los items
                            </Button>
                            <h3 className="cart-items footer-h3">
                                Total price: ${cartTotalPrince}
                            </h3>
                        </div>
                            {!showA && <Button
                                onClick={toggleShowA}
                                variant="outline-success"
                                style={{
                                    alignSelf: "flex-end",
                                    marginRight: "50px"
                                }}>
                                Checkout
                            </Button>}
                        {showA && <CartForm
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                            toggleShowA={toggleShowA}
                            validationErr={datosErrores}
                            validation={validated}
                        />}
                    </>
                    : <CartMessage />}
            </div>
        </>
    )
}
