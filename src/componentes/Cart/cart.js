import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../context/cartContext';
import '../Cart/cart.css';
import CartMessage from '../CartMessage/cartMessage';
import * as firebase from 'firebase/app';
import { getFirestore } from '../../firebase/firebase';
import 'firebase/firestore';
import CartForm from '../CartForm/cartForm';
import validarCamposNuevoUsuario from '../CartForm/servicios-formulario-usuario';
import { BeatLoader } from 'react-spinners';
import CheckoutMessage from '../CheckoutMessage/checkout-message';

function useTextInput(defaultValue) {
    const [val, setVal] = useState(defaultValue);

    return {
        onChange: evt => setVal(evt.target.value),
        value: val,
        type: "text"
    };
}

export default function Cart() {

    const { cart, removeItem, removeAllItems, setDocId, setCart, docId } = useCartContext();

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const [loading, setLoading] = useState(false);

    const [showCheckout, setShowCheckout] = useState(false)

    let totalPrice = 0;

    const nameInput = useTextInput("");
    const emailInput = useTextInput("");
    const reEmailInput = useTextInput("");
    const telefonoInput = useTextInput("");

    const inputs = [
        [nameInput],
        [emailInput],
        [reEmailInput],
        [telefonoInput]
    ];

    const [datosErrores, setDatosErrores] = useState([]);

    const [validated, setValidated] = useState(false);

    const formErrorHandler = (erroresForm) => {
        setDatosErrores([erroresForm]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        try {
            setLoading(true);
            setDatosErrores([]);
            setValidated(true);
            createOrder();
            updateSotck();
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }


    const createOrder = async () => {
        const newOrder = {
            buyer: {
                nombre: nameInput.value,
                email: emailInput.value,
                reEmail: reEmailInput.value,
                telefono: telefonoInput.value,
            },
            items: cart.map(e => e),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice,
        }

        const db = getFirestore();

        const orders = db.collection("orders");

        //validacion de datos
        const resultValidation = await validarCamposNuevoUsuario(newOrder.buyer, formErrorHandler);

        try {
            if (resultValidation.length > 0) {
                setValidated(false)
                return resultValidation.forEach(e => e.mensaje);
            }
            setValidated(true);
            const doc = await orders.add(newOrder);
            setDocId(doc.id);
            setCart([]);
            setShowCheckout(true);

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
            <div className="loading-icon">
                <BeatLoader color="#6668f4" size={12} loading={loading} />
            </div>
            <div className="cart-main-container">
                {
                    cart.map((e) => {

                        totalPrice += e.item.price * e.quantity;

                        return (
                            <div className="cart-items contenedor" key={e.item.id}>
                                <img className="cart-item-img" src={`/img/${e.item.img}`} alt={e.item.description} />
                                <li className="todo-items cart-item-li"> {e.item.name} {e.item.description} ${e.item.price} x {e.quantity} </li>
                                <button onClick={removeItem(e.item.id)} className="trash-btn"><i className="fas fa-trash"></i></button>
                            </div>

                        )
                    })
                }
                {totalPrice > 0 ?
                    <>
                        <div className="cart-items footer">
                            <Button
                                onClick={removeAllItems}
                                className="cart-item-remove-all-btn">
                                Borrar todos los items
                            </Button>
                            <h3 className="cart-items footer-h3">
                                Total price: ${totalPrice}
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
                            handleSubmit={handleSubmit}
                            toggleShowA={toggleShowA}
                            validationErr={datosErrores}
                            validation={validated}
                            inputs={inputs}
                        />}
                    </>
                    : !showCheckout && <CartMessage />}
            </div>
            {showCheckout &&<CheckoutMessage idFromItem={docId} />}
        </>
    )
}
