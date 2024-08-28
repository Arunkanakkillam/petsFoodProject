import { Route, Routes } from "react-router-dom"
import { Signin } from "./signIn"
import { Register } from "./register"
import { Home } from "./home"
import { Caart } from "./cart"
import { Payment } from "./payment"

function App() {


  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/signIn' element={<Signin/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/cart" element={<Caart/>}/>
  <Route path="/payment" element={<Payment/>}/>
</Routes>

    </>
  )
}

export default App
