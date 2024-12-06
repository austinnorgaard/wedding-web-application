'use client';

import { useState } from "react";
import "@/app/ui/Styles/CSS/RegistryItemEditor.css"
import axios from "axios";

export default function RegistryItemEditor () {
    const [storeName, setStore]: any = useState("");
    const [productName, setProductName]: any = useState("");
    const [productUrl, setProductUrl]: any = useState("");
    const [imageUrl, setImage]: any = useState("");
    const [price, setPrice]: any = useState(0.00);
    const [stock, setStock]: any = useState(0);

    async function handleSubmit (e: any) {
        e.preventDefault();
        try {
          axios.post(`https://weddingbackend.norgaardfamily.com/registry`, {
            storeName: storeName,
            productName: productName,
            productUrl: productUrl,
            imageUrl: imageUrl,
            productPrice: price,
            qtyNeeded: stock,
            priority: 100,
            canAddToStandardCart: true,
            isOnPage: true
          })
          .then((res) => {
            console.log("Success")
          })
        } catch (error) {
          console.log(error)
        }
    }

    return (
        <div className="EditorPage">
            <div className="edit-wrapper">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Store Name:</label>
                    <input name="store" type="text" onChange={e => setStore(e.target.value)}></input>
                    <label>Product Name:</label>
                    <input name="product" type="text" onChange={e => setProductName(e.target.value)}></input>
                    <label>Product Url:</label>
                    <input name="product_url" type="text" onChange={e => setProductUrl(e.target.value)}></input>
                    <label>Image Url:</label>
                    <input name="image" type="text" onChange={e => setImage(e.target.value)}></input>
                    <label>Price:</label>
                    <input name="price" type="number" onChange={e => setPrice(e.target.value)}></input>
                    <label>Quantity:</label>
                    <input name="quantity" type="number" onChange={e => setStock(e.target.value)}></input>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}