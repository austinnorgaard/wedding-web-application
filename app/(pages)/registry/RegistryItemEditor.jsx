import React, { useState } from "react";
import "../../../Styles/CSS/RegistryItemEditor.css"
import axios from "axios";

export default function RegistryItemEditor () {
    const [itemModel, setItem] = useState({})

    async function handleSubmit (e) {
        e.preventDefault()
        setItem({
            storeName: "",
            productName: "",
            productUrl: "",
            imageUrl: "",
            productPrice: 0.00,
            qtyNeeded: 0,
            priority: 100,
            canAddToStandardCart: true,
            isOnPage: false
        })
        axios.post("http://localhost:8080/registry")
        .then((res) => {
            console.log(res)
            console.log(itemModel)
        })
        .catch((err) => {
            console.log("Error: " + err)
        })
    }

    return (
        <div className="EditorPage">
            <div className="edit-wrapper">
                <form onSubmit={handleSubmit}>
                    <label>Store Name:</label>
                    <input name="store" type="text"></input>
                    <label>Product Name:</label>
                    <input name="product" type="text"></input>
                    <label>Product Url:</label>
                    <input name="product_url" type="text"></input>
                    <label>Image Url:</label>
                    <input name="image" type="text"></input>
                    <label>Price:</label>
                    <input name="price" type="number"></input>
                    <label>Quantity:</label>
                    <input name="quantity" type="number"></input>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}