import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';
import { BeatLoader } from 'react-spinners';
import Item from "../Item/item";
//import Loading from "./Loading"

export default function CategoryContainer() {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [test, setTest] = useState(false);


    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const categoriesItems = itemCollection.where("categoryId", "==", categoryId);
        categoriesItems.get().then((querySnapshot) => {
            if (!querySnapshot.size === 0) {
                console.log("Items does not exist!")
            }
            setItems(querySnapshot.docs.map(item => ({ id: item.id, ...item.data() })))
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
            setLoading(false);
            setTest(true);
        })
    }, [categoryId])

    return (
        <>
            {console.log(items)}
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
                        docs={items}    
                    />
                </div>
            </>}


        </>
    )
}

