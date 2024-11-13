import { Route, Routes } from "react-router-dom"
import { Signin } from "./signIn"
import { Register } from "./register"
import { Home } from "./home"
// import { Caart } from "./cart"
// import { Payment } from "./payment"
// import { Dogs } from "./dog"
// import { Cats } from "./cats"
// import { AdminLogin } from "./adminLogin"
// import { Admin } from "./admin"
// import { UserManagement } from "./userManagement"
// import { Product } from "./product"
// import { Update } from "./update"
// import { Order } from "./order"
import MapView from "./map"
import { Provider } from "react-redux"
import { store } from "./Store/Store"


function App() {


  return (
    <>
<Provider store={store}>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/signIn' element={<Signin/>}/>
  <Route path="/register" element={<Register/>}/>
  {/* <Route path="/cart" element={<Caart/>}/>
  <Route path="/payment" element={<Payment/>}/>
  <Route path="/dog" element={<Dogs/>}/>
  <Route path="/cats" element={<Cats/>}/>
  <Route path="/adminLogin" element={<AdminLogin/>}/>  
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/userManagement" element={<UserManagement/>}/>
  <Route path="/product"  element={<Product/>}/>
  <Route path="/update" element={<Update/>}/>
  <Route path="order" element={<Order/>}/> */}
  <Route path="map" element={<MapView/>}/>
</Routes>
</Provider>

    </>
  )
}

export default App
