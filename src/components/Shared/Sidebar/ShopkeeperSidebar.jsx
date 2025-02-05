import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

const ShopkeeperSidebar = () => {
  const menuItems = [
    {
      path: "/shopkeeper/dashboard",
      icon: "dashboard",
      label: "Dashboard"
    },
    {
      path: "/shopkeeper/billing",
      icon: "receipt",
      label: "Billing"
    },
    {
      path: "/shopkeeper/inventory",
      icon: "inventory",
      label: "Inventory"
    },
    {
      path: "/shopkeeper/orders",
      icon: "shopping_cart",
      label: "Orders"
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Nimal Store</h2>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <i className="material-icons">{item.icon}</i>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <span className="material-icons">account_circle</span>
          <span>Store Manager</span>
        </div>
      </div>
    </aside>
  );
};

export default ShopkeeperSidebar; 