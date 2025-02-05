import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Admin Panel</h1>
      </div>
      <div className="navbar-right">
        <button className="logout-btn" onClick={handleLogout}>
          <i className="material-icons">logout</i>
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 