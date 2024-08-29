import { Route, Routes } from "react-router-dom"
import { Signin } from "./signIn"
import { Register } from "./register"
import { Home } from "./home"
import { Caart } from "./cart"
import { Payment } from "./payment"
import { Dogs } from "./dog"
import { Cats } from "./cats"

function App() {


  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/signIn' element={<Signin/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/cart" element={<Caart/>}/>
  <Route path="/payment" element={<Payment/>}/>
  <Route path="/dog" element={<Dogs/>}/>
  <Route path="cats" element={<Cats/>}/>
</Routes>

    </>
  )
}

export default App
