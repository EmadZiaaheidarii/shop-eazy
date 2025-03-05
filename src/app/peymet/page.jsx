'use client'

import React, { useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

function Peymet() {

    const { formSubmit, submit, setFormSubmit } = useContext(CartContext)
    const [showform , setShowForm] = useState(false)
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormSubmit(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleNumberInput = (e) => {
        e.target.value = e.target.value.replace(/\D/g, ''); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (formSubmit.CodeMeli.length !== 10) {
            setError('کد ملی باید دقیقا 10 رقم باشد!');
            return;
        }
        if (formSubmit.phoneNumber.length < 10) {
            setError('شماره تماس باید حداقل 10 رقم باشد!');
            return;
        }

        setShowForm(true);
        setError('');
        setFormSubmit({
            city: '',
            CodeMeli: '',
            Address: '',
            phoneNumber: ''
        });

        alert('با موفقیت ارسال شد');
        return submit;
    };

    return (
        <div className="bg-blue-100 min-h-screen flex flex-col justify-between"> 
            <div className="mt-8 flex justify-center items-center flex-1">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700">Enter Your Information</h2>

                    {error && <p className="text-red-500 text-center font-bold mb-4">{error}</p>}

                    <div className="mb-6">
                        <label htmlFor="city" className="block text-lg font-medium text-gray-700 mb-2">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formSubmit.city}
                            onChange={handleChange}
                            className="w-full p-4 border-2 border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-300 transition-all"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="CodeMeli" className="block text-lg font-medium text-gray-700 mb-2">National ID</label>
                        <input
                            type="text"
                            id="CodeMeli"
                            name="CodeMeli"
                            value={formSubmit.CodeMeli}
                            onChange={handleChange}
                            onInput={handleNumberInput} 
                            maxLength={10} 
                            className="w-full p-4 border-2 border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-300 transition-all"
                            required
                        />
                    </div>

                    <div className="flex gap-x-4 mb-6">
                        <div className="flex-1">
                            <label htmlFor="phoneNumber" className="text-lg font-medium text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formSubmit.phoneNumber}
                                onChange={handleChange}
                                onInput={handleNumberInput} 
                                maxLength={11} 
                                className="w-full p-4 border-2 border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-300 transition-all"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="Address" className="text-lg font-medium text-gray-700 mb-2">Address</label>
                            <input
                                type="text"
                                id="Address"
                                name="Address"
                                value={formSubmit.Address}
                                onChange={handleChange}
                                className="w-full p-4 border-2 border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-300 transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Peymet;
