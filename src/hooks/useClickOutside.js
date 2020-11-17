import { useEffect } from "react";

//
export default function useClickOutside(ref, callBack){
    useEffect(()=> {
        const handler = (e) => {
            if(ref.current && !ref.current.contains(e.target)) {
                callBack();
            }
        }
        document.addEventListener('click', handler);
        return () => {
            document.removeEventListener('click', handler)
        }
    })

};