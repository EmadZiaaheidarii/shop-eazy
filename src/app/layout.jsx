
import "./globals.css";
import Header from "../components/Header";
import CartProvider from "../contexts/CartContext";
import CommentProvider from "../contexts/CommentContext";

 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <CommentProvider>
         <CartProvider>
        <Header/>
        {children}
         </CartProvider>
         </CommentProvider>
      </body>
    </html>
  );
}
