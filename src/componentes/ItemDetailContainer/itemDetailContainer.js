import React, { Children, useEffect, useState } from 'react';
import '../Item/items.css';
import { BeatLoader } from 'react-spinners';
import ItemDetail from '../ItemDetail/itemDetail';
import './itemDetailContainer.css';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';

export default function ItemDetailContainer({ initial, stock, onAdd }) {

    const [test, setTest] = useState(false);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const FSItem = itemCollection.doc(id);

        FSItem.get().then((doc) => {
            if (!doc.exists) {
                console.log('Item does not exist!')
                return;
            }
            setItem({ id: doc.id, ...doc.data() });
            console.log(item)
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(()=>{
            setLoading(false);
            setTest(true);
        })

    }, [item, id])

    return (
        <>
            {console.log(item)}
            <div className="loading-icon">
                <BeatLoader color="#6668f4" size={12} loading={loading} />
            </div>
            {test && <>
                <ItemDetail
                    itemDetail={[item]}
                    initial={initial}
                    stock={stock}
                    onAdd={onAdd}
                >
                    {Children}
                </ItemDetail>
            </>}
        </>
    )
}






