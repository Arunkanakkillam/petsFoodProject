import { useContext, useState } from "react"
import { globlValue } from "./context"

export const Product = ()=>{
    const {data,addProduct}=useContext(globlValue)
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const [imgSrc,setimgSrc] = useState('')
    const [category,setCategory]=useState('')

    return <>
    <header className="d-flex justify-content-center">
        <div className="col-3 bg-success text-white m-5 d-flex justify-content-center rounded">
        <h1>
            Products
        </h1>
        </div>
    </header>
    <section className="p-5">
        <table>
            <thead>
            <tr>
                <th></th>
                <th><h3>Product name</h3></th>
                <th><h3>Price</h3></th>
            </tr>
            </thead>
            <tbody>
                {data.map((value,index)=>(
                    <tr key={index}>
                         <td>
                         <img className="col-2 "src={value.imgSrc}/>                           
                        </td>
                        <td className="col-8">
                        {value.title}
                        </td>
                        <td>
                            {value.price}
                        </td>
                    </tr>
                   
                )
                )}
            </tbody>
          
        </table>
    </section>
    <section className="d-flex justify-content-center">
    
        <form className="d-flex justify-content-center flex-column col-4 p-5 bg-dark text-white">
        <h3>Add new products</h3>
            <label htmlFor="name" >Product title</label>
            <input 
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="product title"
            required
            />
            <label htmlFor="name">Price</label>
             <input 
            type="text"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            placeholder="Price"
            required
            />
            <label htmlFor="name">image link</label>
             <input 
            type="text"
            value={imgSrc}
            onChange={(e)=>setimgSrc(e.target.value)}
            placeholder="image link"
            required
            />
            <label htmlFor="name">Category</label>
               <input 
            type="text"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            placeholder="mention dog/cat/both category"
            required
            />


            <button className="btn-primary mt-5 rounded" type="submit" onClick={(e)=>{e.preventDefault()
                addProduct(title,price,imgSrc,category)}}>submit</button>
        </form>
    </section>
    </>
}