
'use client'

import {createContext ,useEffect,useState } from "react" ; 

export const CartContext = createContext();



 function CartProvider({children}) {
    const [cart , setCart] = useState([]);
 const [formSubmit , setFormSubmit] =useState({
    city : '',
    CodeMeli : '',
    Address : '',
    phoneNumber: ''

 })
    useEffect(()=>{

        const getItem = JSON.parse(localStorage.getItem("cart"))
    
        if(getItem){
            setCart(getItem)
        }
    },[])
    
    useEffect(()=>{
    
        localStorage.setItem("cart",JSON.stringify(cart))
    
    },[cart])


function addToCart(product){
  setCart(prev=>{
  let selectedProduct=  prev.find((item)=>item.id==product.id)
  if(!selectedProduct){
   return [...prev,{...product,quantity:1}]
  }
  else{
   return prev.map(item=>
        item.id ==product.id?
        {...item, quantity:item.quantity+1}:
        item
    )
  }
  }
  )

}
function removeCart (productId){
 setCart(prev=>prev.filter((product)=>product.id!=productId))
}
function updateQuantity (productId,newQuantity){
    setCart(prev=>prev.map(item=>
    item.id==productId?
    {...item,quantity:newQuantity}:
    item
    ))
}
function jameQeymat (){
    let total = 0
    cart.map(item=>
     total += item.quantity *item.price
    )
    return total 
}
 async function submit (){
try{
    const res = fetch('http://localhost:3001/Submit',{
        method:'POST',
        body:JSON.stringify(formSubmit)
    })
    
    if (res.ok) {
            alert('اطلاعات با موفقیت ارسال شد')
            setFormSubmit({  
                  city : '',
                CodeMeli : '',
                Address : '',
                phoneNumber: ''})
                return true 
    }
    else {
        alert('ارسال اطلاعات با خدا مواجه شد')
        return false 
    }
}
catch(error){
    console.error('شما با خطا مواجه شده اید',error)
}

}


   return(

                <CartContext.Provider value={{addToCart,removeCart,cart,updateQuantity,jameQeymat,submit,setFormSubmit,formSubmit}}>
                    {children}
                </CartContext.Provider>
                
   )
}


export default CartProvider





