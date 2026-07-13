import React, { useState } from 'react'

const Listmaker = () => {
    const [text, setText] = useState("");
    const [items, setItems] = useState([])
    const [isEditing, setIsEditing] = useState(null);
    
    const addTods = (e) => {
        e.preventDefault();
        if (!text.trim()) {
            return
        }
        if (isEditing === null) {
            setItems([...items, { id: Date.now(), text: text }]);
        } else {
            const updatedItems = items.map((item) => {
                return item.id === isEditing ? { ...item, text: text } : item;
            })
            setItems(updatedItems);
            setIsEditing(null);
        }
        setText("")
    }

    const deleteItems = (id) => {
        const updatedItem = items.filter((item) => item.id !== id);
        setItems(updatedItem);
        if (isEditing === id) {
            setIsEditing(null);
            setText("")
        }
    }

    const editItems = (item) => {
        setText(item.text)
        setIsEditing(item.id)
    }

    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-center mb-4 text-gray-800">📝 My Lister</h2>
                <form onSubmit={addTods} className="flex gap-2 mb-4">
                    <input
                        type="text"
                        placeholder='Enter Something'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                    >
                        {isEditing === null ? "Add" : "Update"}
                    </button>
                </form>
                <div>
                    <ul className="list-disc space-y-2 text-gray-700">
                        {
                            items.length > 0 ? (
                                items.map((item) => {
                                    return (
                                        <li key={item.id} className="bg-gray-50 flex justify-between items-center p-2 list-none rounded border border-gray-100">
                                            <div>
                                                <span>{item.text}</span>
                                            </div>
                                            <div className='flex gap-5'>
                                                <button
                                                    onClick={() => deleteItems(item.id)}
                                                    className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs font-semibold hover:bg-red-200 transition-colors"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    onClick={() => editItems(item)}
                                                    className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs font-semibold hover:bg-red-200 transition-colors"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })
                            ) : (
                                <>
                                    <div className='text-center'>
                                        <p>No Items Available</p>
                                    </div>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Listmaker