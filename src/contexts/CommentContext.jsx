
'use client'

import {createContext ,useState } from "react" ; 

export const CommentContext = createContext();

function CommentProvider({children}) {
    const [comment, setComment] = useState('');

    async function sendcomment(comment,title) {
        if (!comment) {
          alert("لطفاً یک کامنت وارد کنید");
          return;
        }
      
        try {
          const res = await fetch('http://localhost:3001/Comment/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              payam: comment,
              id:Math.floor(Math.random()*1000).toString(), 
              title:title,
            })
          });
      
          if (!res.ok) {
            throw new Error("مشکلی پیش آمده است");
          }
      
          alert("کامنت شما با موفقیت ارسال شد!");
        } catch (error) {
          console.error(error);
          alert("ارسال کامنت با مشکل مواجه شد");
        }
      }
      

return(
    <CommentContext.Provider value={{comment,setComment,sendcomment}}>
{children}
    </CommentContext.Provider>
)
}

export default CommentProvider


