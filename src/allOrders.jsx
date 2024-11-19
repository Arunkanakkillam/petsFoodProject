import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders } from "./Slices/orderSlice";
import { useNavigate } from "react-router-dom";

export const AllOrders = () => {
  const { order } = useSelector((state) => state.orderslice);
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  return (
    <>
      <header>
        <div className="bg-warning text-dark usermanage-header d-flex justify-content-center align-items-center py-3">
          <h1>Ordered Products Statistics</h1>
        </div>
      </header>
      <main className="container my-4">
        {order && order.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead className="bg-primary text-white">
                <tr>
                  <th>No:</th>
                  <th>Product ID</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>User ID</th>
                  <th>Order ID</th>
                  <th>Created Date</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item, index) => (
                  <tr
                    key={item.orderId}
                    className={index % 2 === 0 ? "bg-light" : "bg-secondary text-white"}
                  >
                    <td>{index + 1}</td>
                    <td>{item.productId}</td>
                    <td>{item.quantity}</td>
                    <td>Rs-{item.price}</td>
                    <td>Rs-{item.total}</td>
                    <td>{item.userId}</td>
                    <td>{item.orderId}</td>
                    <td>{new Date(item.createdDate).toLocaleDateString()}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={`Product ${item.productId}`}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center">
            <p>No orders found.</p>
          </div>
        )}
      </main>
      <div className="d-flex flex-column align-items-start">
        <h4 className="mb-3">Check Revenue Statistics of the Last 30 Days</h4>
        <button
          className="btn btn-success"
          onClick={() => nav("revenueStats")}
        >
          Click Here
        </button>
      </div>
    </>
  );
};
