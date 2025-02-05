import "./Orders.css";

const OrdersPage = () => {
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
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1234</td>
              <td>2024-03-20</td>
              <td>John Doe</td>
              <td>$99.99</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
            </tr>
            <tr>
              <td>#1235</td>
              <td>2024-03-20</td>
              <td>Jane Smith</td>
              <td>$149.99</td>
              <td>
                <span className="status completed">Completed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage; 