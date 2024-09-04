import { useContext } from "react";
import { globlValue } from "./context";

export const UserManagement = () => {
    const { userr,block,unBlock } = useContext(globlValue);
    let mail

    return (
        <>
            <header>
                <div className="bg-warning text-dark usermanage d-flex justify-content-center align-items-center">
                    <h1>Manage User Credentials</h1>
                </div>
            </header>
            <section className="p-5">
                <table className="table">
                    <thead>
                        <tr className="align-middle">
                            <th>SI No:</th>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Products Details</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {userr.map((value, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{value.Name}</td>
                                <td>{value.email}</td>
                                <td>{value.cart.map((v,i)=>(
                                    <div className="d-flex align-items-center col-12">
                                    <div className="col-6 mt-5">
                                        {v.title}
                                    </div>
                                    <div className="col-2 d-flex">
                                        <img className="col-1" src={v.imgSrc} style={{width:"100%"}}/>
                                    </div>
                                    <div  className="d-flex  align-items-center col-2 mt-5">
                                    <div className="col-2 d-flex align-items-center">
                                    <h3 > {v.category}</h3>
                                    </div>
                                    </div>
                                    </div>
                                ))}</td>
                                <td>
                                  
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section>
               
                <div className="d-flex justify-content-center align-items-center vh-100">
            <form  className="p-4 border rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter user email"  
                        onChange={(e)=>mail=e.target.value}                   
                        required
                    />
                </div>
                <button type="submit" className="btn btn-danger w-100" onClick={()=>block(mail)}>Block User</button>
                <button  type="submit" className="btn btn-danger w-100 mt-3" onClick={()=>unBlock(mail)}>Unblock user</button>
            </form>
        </div>
            </section>
        
                </>
    );
};
