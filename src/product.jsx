// import { useContext, useState } from "react"
// import { globlValue } from "./context"

// export const Product = ()=>{
//     const {data,addProduct,deleteProduct,update}=useContext(globlValue)
//     const [title,setTitle] = useState('')
//     const [price,setPrice] = useState('')
//     const [imgSrc,setimgSrc] = useState('')
//     const [category,setCategory]=useState('')




//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addProduct(title, price, imgSrc, category);
//         setTitle('');
//         setPrice('');
//         setimgSrc('');
//         setCategory('');
//     };

//     return <>
//     <header className="d-flex justify-content-center">
//         <div className="col-3 bg-success text-white m-5 d-flex justify-content-center rounded">
//         <h1>
//             Products
//         </h1>
//         </div>
//     </header>
//     <div className="d-flex justify-content-center">
           
//             <button
//                 type="button"
//                 className="btn btn-primary"
//                 data-bs-toggle="modal"
//                 data-bs-target="#addProductModal"
//             >
//                 Add New Product
//             </button>

     
//             <div
//                 className="modal fade"
//                 id="addProductModal"
//                 tabIndex="-1"
//                 aria-labelledby="addProductModalLabel"
//                 aria-hidden="true"
//             >
//                 <div className="modal-dialog">
//                     <div className="modal-content bg-dark text-white">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="addProductModalLabel">
//                                 Add New Product
//                             </h5>
//                             <button
//                                 type="button"
//                                 className="btn-close"
//                                 data-bs-dismiss="modal"
//                                 aria-label="Close"
//                             ></button>
//                         </div>
//                         <div className="modal-body">
                          
//                             <form onSubmit={handleSubmit}>
//                                 <label htmlFor="name">Product title</label>
//                                 <input
//                                     type="text"
//                                     className="form-control mb-3"
//                                     value={title}
//                                     onChange={(e) => setTitle(e.target.value)}
//                                     placeholder="Product title"
//                                     required
//                                 />
//                                 <label htmlFor="price">Price</label>
//                                 <input
//                                     type="text"
//                                     className="form-control mb-3"
//                                     value={price}
//                                     onChange={(e) => setPrice(e.target.value)}
//                                     placeholder="Price"
//                                     required
//                                 />
//                                 <label htmlFor="imgSrc">Image link</label>
//                                 <input
//                                     type="text"
//                                     className="form-control mb-3"
//                                     value={imgSrc}
//                                     onChange={(e) => setimgSrc(e.target.value)}
//                                     placeholder="Image link"
//                                     required
//                                 />
//                                 <label htmlFor="category">Category</label>
//                                 <input
//                                     type="text"
//                                     className="form-control mb-3"
//                                     value={category}
//                                     onChange={(e) => setCategory(e.target.value)}
//                                     placeholder="Mention dog/cat/both category"
//                                     required
//                                 />

//                                 <button className="btn btn-success mt-3" type="submit">
//                                     Submit
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     <section className="p-5">
//         <table>
//             <thead>
//             <tr>
//                 <th></th>
//                 <th><h3>Product name</h3></th>
//                 <th><h3>Price</h3></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             </thead>
//             <tbody>
//                 {data.map((value,index)=>(
//                     <tr key={index}>
//                          <td>
//                          <img className="col-2 "src={value.imgSrc}/>                           
//                         </td>
//                         <td className="col-8">
//                         {value.title}
//                         </td>
//                         <td>
//                             {value.price}
//                         </td>
//                         <td><button className="btn btn-danger" onClick={()=>deleteProduct(value.title)}>Delete</button></td>
//                         <td><button className="btn btn-info" onClick={()=>update(value.id)}>Update</button></td>
//                     </tr>
                   
//                 )
//                 )}
//             </tbody>
          
//         </table>
//     </section>
    
//     </>
// }

