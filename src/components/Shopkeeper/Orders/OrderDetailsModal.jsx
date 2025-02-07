import React from "react";
import "./Orders.css";

const OrderDetailsModal = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Order Details #{order.orderId}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="detail-row">
            <span className="label">Store ID:</span>
            <span className="value">{order.orderStoreId}</span>
          </div>

          <div className="detail-row">
            <span className="label">User ID:</span>
            <span className="value">{order.orderUserId}</span>
          </div>

          <div className="detail-row">
            <span className="label">Date:</span>
            <span className="value">
              {new Date(order.orderDate).toLocaleString()}
            </span>
          </div>

          <div className="detail-row">
            <span className="label">Status:</span>
            <span className={`status ${order.orderStatus.toLowerCase()}`}>
              {order.orderStatus}
            </span>
          </div>

          {order.products && (
            <div className="order-items">
              <h3>Items</h3>
              <table>
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products?.map((product, index) => (
                    <tr key={index}>
                      <td>{product.productId}</td>
                      <td>{product.productName}</td>
                      <td>{product.quantity}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td>${(product.quantity * product.price).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {order.totalAmount && (
            <div className="order-summary">
              <div className="summary-row total">
                <span>Total Amount:</span>
                <span>${order.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
