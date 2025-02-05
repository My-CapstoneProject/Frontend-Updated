import { Outlet } from 'react-router-dom';
import ShopkeeperSidebar from '../Shared/Sidebar/ShopkeeperSidebar';
import Navbar from '../Shared/Navbar/Navbar';
import './AdminLayout.css';

const ShopkeeperLayout = () => {
  return (
    <div className="admin-layout">
      <ShopkeeperSidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ShopkeeperLayout; 