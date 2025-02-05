// import { NavLink } from 'react-router-dom';
// import "./Sidebar.css";

// const AdminSidebar = () => {
//   const menuItems = [
//     {
//       path: "/admin/dashboard",
//       icon: "dashboard",
//       label: "Dashboard",
//     },
//     {
//       path: "/admin/products",
//       icon: "inventory",
//       label: "Products",
//     },
//     {
//       path: "/admin/stores",
//       icon: "store",
//       label: "Stores",
//     },
//     {
//       path: "/admin/approvals",
//       icon: "approval",
//       label: "Approvals",
//     },
//   ];

//   return (
//     <aside className="sidebar">
//       <div className="sidebar-header">
//         <h2>Vikraya Vishleshan</h2>
//       </div>

//       <nav className="sidebar-nav">
//         {menuItems.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             className={({ isActive }) => 
//               `nav-link ${isActive ? 'active' : ''}`
//             }
//           >
//             <i className="material-icons">{item.icon}</i>
//             <span>{item.label}</span>
//           </NavLink>
//         ))}
//       </nav>

//       <div className="sidebar-footer">
//         <div className="user-info">
//           <span className="material-icons">account_circle</span>
//           <span>Admin User</span>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default AdminSidebar; 
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

const AdminSidebar = () => {
  const menuItems = [
    {
      path: "/admin/dashboard",
      icon: "dashboard",
      label: "Dashboard",
    },
    {
      path: "/admin/products",
      icon: "inventory",
      label: "Products",
    },
    {
      path: "/admin/stores",
      icon: "store",
      label: "Stores",
    },
    {
      path: "/admin/approvals",
      icon: "approval",
      label: "Approvals",
    },
    {
      path: "/admin/users",
      icon: "people",
      label: "Users",
    },
    {
      path: "/admin/orders",
      icon: "shopping_cart",
      label: "Orders",
    },
    {
      path: "/admin/profile",
      icon: "person",
      label: "Profile",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Vikraya Vishleshan</h2>
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
          <span>Admin User</span>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;