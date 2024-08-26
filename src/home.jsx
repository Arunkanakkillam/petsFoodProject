import { Navbar } from "./Navbar"
import axios, { Axios } from "axios"
import { useState,useEffect } from "react"
export const Home=()=>{
const [data,setData]=useState([])
const [sttc,setSttc]=useState([])
useEffect(()=>{
   const fetchData=async()=>{
      try{
         const response=await axios.get('http://localhost:8000/products')
         const res=await axios.get('http://localhost:8000/sttcProducts')
         setData(response.data)
         setSttc(res.data)
      }
      catch(error){
         console.error("error in fetching data")
      }
   }
   fetchData()
},[]
)
 
    return(<>
<Navbar/>
<section >
    <div className="container-fluid bg-success d-flex justify-content-center">
        <h1>Get upto 25% cashback for your first order </h1>
    </div>
</section>
<section className="d-flex justify-content-center mt-5">
    <h1 className="d-flex justify-content-center text-decoration-underline">SHOP FOR</h1>
    
</section>
<section className="d-flex justify-content-center mt-3">
 
<div className="d-inline-block m-5">
        <img className="col-12 mb-0 " src="/dog.png"/>
        <h5 className="d-flex justify-content-center">Dogs</h5>
</div>
<div className="d-inline-block m-5">
        <img className="col-12 mb-0 " src="/cat.png"/>
        <h5 className="d-flex justify-content-center">Cats</h5>
</div>
</section>
<section  >
    <h1 className="d-block">New and featured</h1>
</section>
<section className="d-flex overflow-auto flex-nowrap">

{sttc.map((user)=>(
<div className="card col-md-4 col-6 m-3 mt-3">
      <div className="card-body">
          <img src={user.img} className="col-11"/>
      </div>
</div>
   )
   )}
</section>
<section className="mt-5">
    <h1>TOP PRODUCTS</h1>
</section>


<section className="d-flex overflow-auto flex-nowrap">

{data.map((user)=>(
   <div className="card col-md-3 col-6 m-3">
   <div className="card-body">
      <img src={user.imgSrc} className="col-11"/>
      <h4>{user.title}</h4>
      <p>{user.price}</p>
      <button>shop now</button>
   </div>
</div>
)
)}

</section>
    </>
        
    )
}