import { useState, useEffect } from "react";
import axios from "axios";
import "./Orders.css";
import OrderDetailsModal from "./OrderDetailsModal";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8060/api/orders");
      setOrders(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch orders. Please try again later.");
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewOrder = async (orderId) => {
    try {
      const response = await axios.get(
        `http://localhost:8060/api/orders/${orderId}`
      );
      setSelectedOrder(response.data);
    } catch (err) {
      console.error("Error fetching order details:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="orders-page">
        <div className="orders-header">
          <h1>Orders</h1>
        </div>
        <div className="loading-spinner">Loading orders...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders-page">
        <div className="orders-header">
          <h1>Orders</h1>
        </div>
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1>Orders</h1>
      </div>

      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>User ID</th>
              <th>Store ID</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td>#{order.orderId}</td>
                <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                <td>{order.orderUserId}</td>
                <td>{order.orderStoreId}</td>
                <td>
                  <span className={`status ${order.orderStatus.toLowerCase()}`}>
                    {order.orderStatus}
                  </span>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => handleViewOrder(order.orderId)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="6" className="no-orders">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default OrdersPage;
