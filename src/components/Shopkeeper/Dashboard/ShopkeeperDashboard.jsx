import { useState, useEffect } from "react";
import axios from "axios";
import "./ShopkeeperDashboard.css";

const ShopkeeperDashboard = () => {
  const [orderCount, setOrderCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchOrderCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8060/api/orders/howmanyorders"
      );
      setOrderCount(response.data);
    } catch (err) {
      console.error("Error fetching order count:", err);
      setOrderCount(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderCount();
  }, []);

  return (
    <div className="shopkeeper-dashboard">
      <div className="dashboard-header">
        <h1>Store Dashboard</h1>
        <div className="date-display">{new Date().toLocaleDateString()}</div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="material-icons">shopping_cart</i>
          </div>
          <div className="stat-info">
            <h3>Today's Orders</h3>
            <p>{loading ? "Loading..." : orderCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="material-icons">payments</i>
          </div>
          <div className="stat-info">
            <h3>Today's Revenue</h3>
            <p>1,234</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="material-icons">inventory_2</i>
          </div>
          <div className="stat-info">
            <h3>Products in Inventory</h3>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopkeeperDashboard;
