import { useContext } from "react";
import { globlValue } from "./context";

export const UserManagement = () => {
    const { userr, block, unBlock } = useContext(globlValue);

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
                            <th>Email</th>
                            <th>Products Details</th>
                            <th>Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {userr.map((value, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{value.Name}</td>
                                <td>{value.email}</td>
                                <td>
                                    {value.cart.map((v, i) => (
                                        <div className="d-flex align-items-center col-12" key={i}>
                                            <div className="col-6 mt-5">
                                                {v.title}
                                            </div>
                                            <div className="col-2 d-flex">
                                                <img className="col-1" src={v.imgSrc} style={{ width: "100%" }} alt={v.title} />
                                            </div>
                                            <div className="d-flex align-items-center col-2 mt-5">
                                                <div className="col-2 d-flex align-items-center">
                                                    <h3>{v.category}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </td>
                                <td>
                                   {value.isBlocked?<button className="btn btn-success" onClick={() => unBlock(value.email)}>Unblock</button>:
                                    <button className="btn btn-danger me-2" onClick={() => block(value.email)}>Block</button>}
                                   
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
};
