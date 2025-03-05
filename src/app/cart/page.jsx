'use client'

import { CartContext } from '../../contexts/CartContext'
import React, { useContext, useState } from 'react'

function Cart() {
    const { removeCart, cart, updateQuantity, jameQeymat } = useContext(CartContext)



    return (
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
            <h1 className='text-center font-bold text-5xl mb-6 text-blue-600'>Items in Cart</h1>
            {
                cart.length === 0 ?
                    <h1 className='text-center text-black'>آیتمی برای نشان دادن وجود ندارد</h1> :
                    cart.map((product) => (
                        <div key={product.id} className='flex flex-wrap bg-white p-6 rounded-2xl w-full mb-4 shadow-md hover:shadow-xl'>
                            <img className='h-48 w-48 rounded-lg' src={product.image} alt={product.title} />

                            <div className="ml-6 flex-1">
                                <h2 className='font-black text-blue-800 text-xl'>{product.title}</h2>
                                <h4 className='font-black text-blue-900 text-lg'>${product.price}</h4>
                                <div className="mt-2 flex items-center">
                                    <input
                                        type='number'
                                        value={product.quantity}
                                        min={1}
                                        className='bg-white text-black p-2 rounded-lg w-20 border-2 border-blue-500'
                                        onChange={(e) => updateQuantity(product.id, Number(e.target.value))}
                                    />
                                    <button
                                        onClick={() => removeCart(product.id)}
                                        className='bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 mb-2 hover:bg-blue-700 ml-4'>
                                        Remove
                                    </button>

                                   
                                    <div className='ml-5 flex-1'>
                                        <label htmlFor="size" className='bg-blue-400 rounded-md p-2 font-semibold'> Size:</label>
                                        <select
                                            className='focus:ring-4 focus:ring-blue-500 ml-4'
                                            id="size"

                                        >
                                            <option value="xl">X-Large</option>
                                            <option value="l">Large</option>
                                            <option value="m">Medium</option>
                                        </select>
                                    </div>

                                   
                                    <div className='flex-1'>
                                        <label htmlFor="color" className='font-semibold bg-blue-400 rounded-md p-2'> Color:</label>
                                        <select
                                            id="color"
                                            className='focus:ring-4 focus:ring-blue-500 ml-4'
                         
                                        >
                                            <option value="red" className='bg-red-600'> Red</option>
                                            <option value="blue" className='bg-blue-600'> Blue</option>
                                            <option value="green" className='bg-green-600'> Green</option>
                                            <option value="yellow" className='bg-yellow-600'> Yellow</option>
                                            <option value="black" className='bg-black text-white'> Black</option>
                                            <option value="white" className='bg-white'> White</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
            }

            <div className="text-center mt-6">
                <h3 className="bg-blue-600 text-white text-3xl py-4 px-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                    Total Price: ${jameQeymat().toFixed(1)}
                </h3>
            </div>

            <div className="text-center mt-6">
                <a href='/peymet'>
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Payment
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Cart
