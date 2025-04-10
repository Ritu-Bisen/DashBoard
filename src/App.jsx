import React, { useState } from 'react'


import Sidebar from './Components/Sidebar'
import OrderTable from './Components/MartSection/OrderTable'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import DemoTable from './Components/Table/DemoTable'
import ProductManagement from './Components/MartSection/ProductManagement'
import CategoryManagement from './Components/MartSection/CategoryManagement'
import DeliveryBoy from './Components/MartSection/DeliveryBoy'
// import DemoTable from './Components/Table/DemoTable'
import CategoryOfferTable from './Components/MartSection/CategoryOfferTable'
import DeliveryBoyRequest from './Components/MartSection/DeliveryBoyRequest'
import DeliveryBoyManaged from './Components/MartSection/DeliveryBoyManaged'
import DeliveryBoyCash from './Components/MartSection/DeliveryBoyCash'
import StockManagementForm from './Components/MartSection/StockManagementForm'
import DemoTable from './Components/MartSection/DemoTable'
import LoginPage from './Components/LoginPage'



const App = () => {



  return (
    <div className='flex'>
      
     
      <BrowserRouter>
     
     
       <Sidebar/>

       <Routes>
        
        <Route path='/order/orders' element={<OrderTable/>}/>
         <Route path='/stockmanagement' element={<StockManagementForm/>}/>
         <Route path='/product' element={<ProductManagement/>}/>
         <Route path='/category/category' element={<CategoryManagement/>}/>
         <Route path='/category/category-offer' element={<CategoryOfferTable/>}/>
         <Route path='/deliveryboy/delivery-boy-add' element={<DeliveryBoy/>}/>
         <Route path='/deliveryboy/delivery-boy-request' element={<DeliveryBoyRequest/>}/>
         <Route path='/deliveryboy/delivery-boy-management' element={<DeliveryBoyManaged/>}/>
         <Route path='/deliveryboy/delivery-boy-cash' element={<DeliveryBoyCash/>}/>
         
       </Routes>
      
      </BrowserRouter>

    {/* <DemoTable/> */}
    {/* <SidebarNew/>  */}
      
    </div>
  )
}

export default App
