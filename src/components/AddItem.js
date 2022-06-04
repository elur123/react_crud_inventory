import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const AddItemClicked = () => {
        props.addItem({ name: name, price: price, type: type, brand: brand });
        ClearFields()
    }

    const ClearFields = () => {
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    }

    return(
        <div className="col-span-2 md:col-span-1 box-border p-4 border-2 drop-shadow-md">
            <h2 className="text-lg font-bold">Add Item</h2>
            <form className="grid gap-y-1 grid-cols-1">
                <label htmlFor="name-field">Name:</label>
                <input id="name-field" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="price-field">Price:</label>
                <input id="price-field" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label htmlFor="type-field">Type:</label>
                <input id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value)} />
                <label htmlFor="brand-field">Brand:</label>
                <input id="brand-field" type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                <button className="bg-indigo-500 px-5 py-3 rounded text-white font-bold hover:bg-white hover:text-indigo-500" onClick={AddItemClicked} type="button">Add Item</button>
            </form>
        </div>
    );
}


export default AddItem;
