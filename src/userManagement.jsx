import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlockandUnblock, fetchUsers } from "./Slices/AdminSlice";
import "./UserManagement.css"; // Import custom styles

export const UserManagement = () => {
    const { customers } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <>
            <header>
                <div className="bg-warning text-dark usermanage-header d-flex justify-content-center align-items-center">
                    <h1>Manage User Credentials</h1>
                </div>
            </header>
            <section className="p-5">
                <div className="table-responsive">
                    <table className="table table-hover align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>SI No:</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((value, index) => (
                                <tr key={index} className="user-row">
                                    <th>{index + 1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>
                                        {value.isBlocked ? (
                                            <button
                                                className="btn btn-success action-btn"
                                                onClick={() => dispatch(BlockandUnblock(value.email))}
                                            >
                                                Unblock
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-danger action-btn"
                                                onClick={() => dispatch(BlockandUnblock(value.email))}
                                            >
                                                Block
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};
