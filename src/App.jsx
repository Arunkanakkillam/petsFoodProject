import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Signin } from "./signIn"
import { Register } from "./register"

function App() {


  return (
    <>
<Routes>
  <Route path="/" element={<Navbar/>}/>
  <Route path='/signIn' element={<Signin/>}/>
  <Route path="/register" element={<Register/>}/>
</Routes>

    </>
  )
}

export default App
