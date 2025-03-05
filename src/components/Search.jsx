'use client'

import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Search as SearchIcon } from 'lucide-react';

function Search({ products }) {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState('');

  const filterProduct = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-300">
      <div className="relative">
        <input
          className="w-full p-4 pl-12 bg-blue-50 text-blue-900 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجو محصول ..."
        />
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600" size={24} />
      </div>

      {search && (
        <div className="mt-6 grid grid-cols-4 gap-6">
          {filterProduct.length > 0 ? (
            filterProduct.map((product) => (
              <div key={product.id} className="bg-blue-100 p-6 rounded-lg shadow-md border border-blue-400">
                <img className="w-full h-32 rounded-lg mb-4 object-cover border border-blue-500" src={product.image} alt={product.title} />
                <h2 className="text-blue-900 font-bold overflow-hidden text-ellipsis whitespace-nowrap">{product.title}</h2>
                <p className="text-blue-700 font-semibold">${product.price}</p>
                <button
                  onClick={() => {
                    addToCart(product);
                    window.alert("محصول به سبد خرید اضافه شد");
                  }}
                  className="bg-blue-600 text-white w-full py-2 mt-4 hover:bg-blue-700 rounded-md transition-all"
                >
                  Add To Cart
                </button>
              </div>
            ))
          ) : (
            <h1 className="text-blue-900 text-center">محصولی یافت نشد</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;