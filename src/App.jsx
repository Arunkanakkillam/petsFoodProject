import { Route, Routes } from "react-router-dom"
import { Signin } from "./signIn"
import { Register } from "./register"
import { Home } from "./home"

function App() {


  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/signIn' element={<Signin/>}/>
  <Route path="/register" element={<Register/>}/>
</Routes>

    </>
  )
}

export default App
