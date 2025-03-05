'use client';
import { CartContext } from "../../contexts/CartContext";
import React, { useContext, useState } from "react";
import { CommentContext } from "../../contexts/CommentContext";

const product = [
  { id: 1, image: "/images/B1.jpg", price: "110", title: "ClassicFit Men’s Sports T-Shirt – Comfortable & Perfect for Everyday Wear" },
  { id: 2, image: "/images/b2.jpg", price: "70", title: "SlimFit Men’s Jeans – Stylish & Versatile for Any Occasion" },
  { id: 3, image: "/images/b3.jpg", price: "116", title: "Elegant Men’s Formal Blazer – A Sophisticated Choice for Special Events" },
  { id: 4, image: "/images/b4.jpg", price: "111", title: "UrbanStyle Men’s Cotton Hoodie – Warmth & Style Combined" },
  { id: 5, image: "/images/b5.jpg", price: "130", title: "AirFlex Men’s Sneakers – All-Day Comfort & Modern Design" },
];

function BProduct() {
  const [productComments, setProductComments] = useState({}); 
  const { sendcomment } = useContext(CommentContext);
  const { addToCart } = useContext(CartContext);
  const [startIndex, setStartIndex] = useState(0);

  const handleCommentChange = (productId, value) => {
    setProductComments((prev) => ({ ...prev, [productId]: value }));
  };

  const handleComment = async (productId, productTitle) => {
    if (!productComments[productId]) {
      alert("لطفا یک کامنت وارد کنید");
      return;
    }
    await sendcomment(productComments[productId], productTitle);
    setProductComments((prev) => ({ ...prev, [productId]: "" })); 
  };

  const visibleProducts = product.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    if (startIndex + 3 < product.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-white">
      <div className="relative m-6">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-full shadow-xl hover:from-blue-500 hover:to-blue-700 transition-all"
        >
          ⬅️
        </button>

        <div className="grid grid-cols-3 gap-6">
          {visibleProducts.map((products) => (
            <div
              key={products.id}
              className="p-6 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 rounded-xl shadow-lg text-center"
            >
              <img
                className="h-64 w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                src={products.image}
                alt=""
              />
              <p className="mt-4 text-gray-800 font-semibold">{products.title}</p>
              <p className="mt-4 text-gray-800 font-semibold">${products.price}</p>

              {addToCart && (
                <button
                  className="mt-4 bg-blue-600 p-2 rounded-md mb-2 text-white hover:bg-blue-700 transition-all"
                  onClick={() => addToCart(products)}
                >
                  Add To Cart
                </button>
              )}

              <div>
                <textarea
                  className="w-full h-16 p-3 text-end border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={productComments[products.id] || ""}
                  onChange={(e) => handleCommentChange(products.id, e.target.value)}
                  placeholder="نظر خود را بنویسید..."
                />

                <button
                  className="w-full py-2 bg-blue-400 text-white rounded-lg mt-2 hover:bg-blue-500 transition-all"
                  type="button"
                  onClick={() => handleComment(products.id, products.title)}
                >
                  Send Comment
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-full shadow-xl hover:from-blue-500 hover:to-blue-700 transition-all"
        >
          ➡️
        </button>
      </div>
    </div>
  );
}

export default BProduct;
