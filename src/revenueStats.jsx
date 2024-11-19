import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { fetchAllOrders } from "./Slices/orderSlice";

export const RevenueChart = () => {
  const { order } = useSelector((state) => state.orderslice);
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    dispatch(fetchAllOrders());

    const prepareChartData = () => {
      const last30Days = Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
      }).reverse();

      const revenueByDate = order.reduce((acc, order) => {
        const orderDate = order.createdDate.split("T")[0];
        if (last30Days.includes(orderDate)) {
          acc[orderDate] = (acc[orderDate] || 0) + order.total;
        }
        return acc;
      }, {});

      return last30Days.map((date) => ({
        date,
        revenue: revenueByDate[date] || 0,
      }));
    };

    setChartData(prepareChartData());
  }, [order, dispatch]);

  return (
    <div className="container my-4">
      <h2 className="text-primary text-left mb-4">Revenue Statistics (Last 30 Days)</h2>
      <div className="chart-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="5 5" stroke="#ccc" />
            <XAxis
              dataKey="date"
              tick={{ fill: "#555", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "#888" }}
            />
            <YAxis
              tick={{ fill: "#555", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "#888" }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#f5f5f5", border: "1px solid #ddd" }}
              labelStyle={{ color: "#888" }}
              cursor={{ fill: "rgba(0,0,0,0.1)" }}
            />
            <Legend />
            <Bar dataKey="revenue" fill="url(#gradientColors)" barSize={20} />
            <defs>
              <linearGradient id="gradientColors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4caf50" stopOpacity={0.8} />
                <stop offset="50%" stopColor="#2196f3" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ff5722" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
