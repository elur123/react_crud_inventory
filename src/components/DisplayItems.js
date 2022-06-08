function DisplayItems({ items, deleteItem, selectUpdate }) {
    const showItem = (item, index) => {
        return (
            <tr className="hover:bg-white" key={index}>
                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.id}</td>
                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.name}</td>
                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.price}</td>
                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.type}</td>
                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.brand}</td>
                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                    <button className="bg-indigo-800 px-5 py-3 rounded text-white font-bold hover:bg-white hover:text-indigo-800" onClick={() => selectUpdate(item)}>Update</button> <span></span> 
                    <button className="bg-red-800 px-5 py-3 rounded text-white font-bold hover:bg-white hover:text-red-800" onClick={() => deleteItem(item)}>Delete</button>
                </td>
            </tr>
        );
    }

    

    return (
        <div className="col-span-2 box-border p-4 border-2 drop-shadow-md">
            <h2 className="text-lg font-bold">Item List</h2>
            <div className="overflow-x-auto rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-emerald-600">ID</th>
                            <th className="px-4 py-2 text-emerald-600">Name</th>
                            <th className="px-4 py-2 text-emerald-600">Price</th>
                            <th className="px-4 py-2 text-emerald-600">Type</th>
                            <th className="px-4 py-2 text-emerald-600">Brand</th>
                            <th className="px-4 py-2 text-emerald-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(showItem)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DisplayItems