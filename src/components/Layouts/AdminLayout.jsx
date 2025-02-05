import { Outlet } from 'react-router-dom';
import AdminSidebar from '../Shared/Sidebar/AdminSidebar';
import Navbar from '../Shared/Navbar/Navbar';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 