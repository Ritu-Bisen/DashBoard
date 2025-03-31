import React from 'react'


import Sidebar from './Components/Sidebar'
import OrderTable from './Components/Table/OrderTable'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import DemoTable from './Components/Table/DemoTable'
import ProductManagement from './Components/Table/ProductManagement'
import CategoryManagement from './Components/Table/CategoryManagement'
import DeliveryBoy from './Components/Table/DeliveryBoy'


const App = () => {
  return (
    <div className='flex'>
      
     
      <BrowserRouter>
      <Sidebar/>

      <Routes>
        <Route path='/order' element={<OrderTable/>}/>
        <Route path='/stockmanagement' element={<ProductManagement/>}/>
        <Route path='/category' element={<CategoryManagement/>}/>
        <Route path='/deliveryboys' element={<DeliveryBoy/>}/>
      </Routes>
      
      </BrowserRouter>

    
      
    </div>
  )
}

export default App
