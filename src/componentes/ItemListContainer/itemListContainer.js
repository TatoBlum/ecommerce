import React, { useEffect, useState } from 'react';
import Item from '../Item/item';
import './itemListContainer.css';
import { BeatLoader } from 'react-spinners';
import { getFirestore } from '../../firebase/firebase';

export default function ItemListContainer({ title }) {

    const [loading, setLoading] = useState(true);
    const [test, setTest] = useState(false);

    const [collectionItems, setCollectionItems] = useState([])

    useEffect(() => {
        
        const db = getFirestore();
        const itemCollection = db.collection("items");

        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results!')
            }
            setCollectionItems(
                querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data() }))
            );    
        }).catch((error) => {
            console.log(error);
        }).finally(()=>{
            setLoading(false);
            setTest(true);
        })

    }, []) 

    return (
        <>
            <div className="loading-icon">
                <BeatLoader color="#6668f4" size={12} loading={loading} />
            </div>
            {test && <>
                <div style={{
                    display: "flex",
                    position: "relative",
                    justifyContent: "center",
                    alignContent: "center",
                    top: 20,
                }}>
                </div>
                <div className="contenedor-de-items">
                    <Item
                        docs={collectionItems}    
                    />
                </div>
            </>}
        </>
    )
}


