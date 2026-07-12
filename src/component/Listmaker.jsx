import React, { useState } from 'react'

const Listmaker = () => {
    const [text, setText] = useState("");
    const [items, setItems] = useState([])

    const addTods = (e) => {
        e.preventDefault();
        setItems([...items, text]);
        setText("")
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
                        Add
                    </button>
                </form>
                <div>
                    <ul className="list-disc space-y-2 text-gray-700">
                        {
                            items.length > 0 ? (
                                items.map((item, index) => {
                                    return (
                                        <>
                                            <li key={index} className="bg-gray-50 p-2 list-none rounded border border-gray-100">
                                                {item}
                                            </li>
                                        </>
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