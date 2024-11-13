// import {  useContext, useState } from "react";
// import { globlValue } from "./context";


// export const Update = () => {
// const {updt,updateProduct}=useContext(globlValue)
   
//     const [title, setTitle] = useState('');
//     const [price, setPrice] = useState('');
//     const [imgSrc, setimgSrc] = useState('');
//     const [category, setCategory] = useState('');
//     console.log(updt)



//     return (
//         <section className="d-flex justify-content-center align-center mt-5">
//             <form className="d-flex justify-content-center flex-column col-4 p-5 bg-dark text-white" onSubmit={(e)=>{e.preventDefault()
//                 updateProduct(title,price,imgSrc,category)
//             }}>
//                 <h3>Update Product</h3>
//                 <label htmlFor="title">Product Title</label>
//                 <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Product Title"
//                     required
//                 />
//                 <label htmlFor="price">Price</label>
//                 <input
//                     type="text"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     placeholder="price"
//                     required
//                 />
//                 <label htmlFor="imgSrc">Image Link</label>
//                 <input
//                     type="text"
//                     value={imgSrc}
//                     onChange={(e) => setimgSrc(e.target.value)}
//                     placeholder="Image Link"
//                     required
//                 />
//                 <label htmlFor="category">Category</label>
//                 <input
//                     type="text"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     placeholder="Mention dog/cat/both category"
//                     required
//                 />
//                 <button className="btn btn-success mt-5 rounded" type="submit">Submit</button>
//             </form>
//         </section>
//     );
// };
