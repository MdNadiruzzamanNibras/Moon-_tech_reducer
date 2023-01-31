import React from 'react';
import { useProducts } from '../Context/ProductProvider';

const Home = () => {
   const {data} = useProducts()
   console.log(data);
    return (
        <div>
            <p>This home</p>
        </div>
    );
};

export default Home;