import React, {  createContext,  useContext,  useEffect, useReducer, useState } from 'react';
import { instialstate, ProducReducer } from '../State/ProductState/ProuductReducer';

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({children}) => {
    const [data, setData] =useState([])
    const [state , dispatch] = useReducer(ProducReducer, instialstate)
    useEffect(()=>{
        fetch('Product.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const value ={
        data
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};
export const useProducts =()=>{
    const context = useContext(PRODUCT_CONTEXT)
    return context
}
export default ProductProvider;