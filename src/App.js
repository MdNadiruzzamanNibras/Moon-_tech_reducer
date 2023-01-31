
import './App.css';
import { RouterProvider } from 'react-router-dom';

import ProductProvider from './Context/ProductProvider';
import Home from './Component/Home';
import { router } from './router/router';

function App() {
  return (
    <div >
      <ProductProvider>
     
      <RouterProvider router={router} />
      </ProductProvider>
     
    </div>
  );
}

export default App;
