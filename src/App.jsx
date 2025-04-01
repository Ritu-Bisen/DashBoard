import React from 'react'


import Sidebar from './Components/Sidebar'
import OrderTable from './Components/Table/OrderTable'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import DemoTable from './Components/Table/DemoTable'
import ProductManagement from './Components/Table/ProductManagement'
import CategoryManagement from './Components/Table/CategoryManagement'
import DeliveryBoy from './Components/Table/DeliveryBoy'
import DemoTable from './Components/Table/DemoTable'
import CategoryOfferTable from './Components/Table/CategoryOfferTable'
import DeliveryBoyRequest from './Components/Table/DeliveryBoyRequest'



const App = () => {
  return (
    <div className='flex'>
      
     
      <BrowserRouter>
      <Sidebar/>

      <Routes>
        <Route path='/order/orders' element={<OrderTable/>}/>
        <Route path='/stockmanagement' element={<ProductManagement/>}/>
        <Route path='/category/category' element={<CategoryManagement/>}/>
        <Route path='/category/category-offer' element={<CategoryOfferTable/>}/>
        <Route path='/deliveryboy/delivery-boy-add' element={<DeliveryBoy/>}/>
        <Route path='/deliveryboy/delivery-boy-request' element={<DeliveryBoyRequest/>}/>
      </Routes>
      
      </BrowserRouter>

     {/* <DemoTable/>
    <SidebarNew/> */}
      
    </div>
  )
}

export default App
