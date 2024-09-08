import { useContext } from "react"
import { globlValue } from "./context"

export const Order=()=>{

const {order}=useContext(globlValue)
console.log(order)

    return<div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
        <h1>Order history</h1>
    {order.map((value,index)=>(
        <div>
              <h3>your order no: {value.orderno}</h3>
        <p>your address: {value.name}</p>
        <p> {value.code}</p>
        <p> {value.email}</p>
        </div>
      
    ))}
        </div>
    
    </div>
}