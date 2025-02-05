import "./ShopkeeperDashboard.css";

const ShopkeeperDashboard = () => {
  return (
    <div className="shopkeeper-dashboard">
      <div className="dashboard-header">
        <h1>Store Dashboard</h1>
        <div className="date-display">
          {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="material-icons">shopping_cart</i>
          </div>
          <div className="stat-info">
            <h3>Today's Orders</h3>
            <p>25</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="material-icons">payments</i>
          </div>
          <div className="stat-info">
            <h3>Today's Revenue</h3>
            <p>$1,234</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="material-icons">inventory_2</i>
          </div>
          <div className="stat-info">
            <h3>Low Stock Items</h3>
            <p>5</p>
          </div>
        </div>
      </div>

      <div className="recent-orders">
        <h2>Recent Orders</h2>
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Time</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1234</td>
                <td>10:30 AM</td>
                <td>John Doe</td>
                <td>$99.99</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>#1235</td>
                <td>11:45 AM</td>
                <td>Jane Smith</td>
                <td>$149.99</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShopkeeperDashboard; 