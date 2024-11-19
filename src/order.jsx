import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "./Slices/ProductSlice";
import { fetchUserOrder } from "./Slices/orderSlice";


export const Order=()=>{

const {userorder}=useSelector((state)=>state.orderslice);
const {Products}=useSelector((state)=>state.product);
const dispatch=useDispatch();
useEffect(()=>{
   dispatch(fetchUserOrder(localStorage.getItem("userid")));
   dispatch(fetchProduct());
},[dispatch])

console.log(userorder)

    return<div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
        <h1>Order history</h1>
    {userorder.map((value,index)=>(
        <div>
            <img src={Products.find((v)=>v.productId==value.productId).image} className="col-12 card" />
              <h3>your order no: {value.orderId}</h3>
        <p>your order date: {value.createdDate}</p>
        </div>
      
    ))}
        </div>
    
    </div>
}