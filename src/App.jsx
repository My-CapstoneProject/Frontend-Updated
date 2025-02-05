// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginPage from './components/Auth/Login/LoginPage';
// import SignupPage from './components/Auth/Signup/SignupPage';
// import AdminLayout from './components/Layouts/AdminLayout';
// import ShopkeeperLayout from './components/Layouts/ShopkeeperLayout';
// import AdminDashboard from './components/Admin/Dashboard/AdminDashboard';
// import ProductsPage from './components/Admin/Products/ProductsPage';
// import AddProductPage from './components/Admin/Products/AddProductPage'; // Import AddProductPage
// import StoresPage from './components/Admin/Stores/StoresPage';
// import BillingPage from './components/Shopkeeper/Billing/BillingPage';
// import InventoryPage from './components/Shopkeeper/Inventory/InventoryPage';
// import OrdersPage from './components/Shopkeeper/Orders/OrdersPage';
// import ShopkeeperDashboard from './components/Shopkeeper/Dashboard/ShopkeeperDashboard';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Auth Routes */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />

//         {/* Admin Routes */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<AdminDashboard />} />
//           <Route path="dashboard" element={<AdminDashboard />} />
//           <Route path="products" element={<ProductsPage />} />
//           <Route path="products/add" element={<AddProductPage />} /> {/* Add route for AddProductPage */}
//           <Route path="stores" element={<StoresPage />} />
//           <Route path="orders" element={<OrdersPage />} />
//         </Route>

//         {/* Shopkeeper Routes */}
//         <Route path="/shopkeeper" element={<ShopkeeperLayout />}>
//           <Route index element={<ShopkeeperDashboard />} />
//           <Route path="dashboard" element={<ShopkeeperDashboard />} />
//           <Route path="billing" element={<BillingPage />} />
//           <Route path="inventory" element={<InventoryPage />} />
//           <Route path="orders" element={<OrdersPage />} />
//         </Route>

//         {/* Default redirect to login */}
//         <Route path="*" element={<LoginPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Auth/Login/LoginPage';
import SignupPage from './components/Auth/Signup/SignupPage';
import AdminLayout from './components/Layouts/AdminLayout';
import ShopkeeperLayout from './components/Layouts/ShopkeeperLayout';
import AdminDashboard from './components/Admin/Dashboard/AdminDashboard';
import ProductsPage from './components/Admin/Products/ProductsPage';
import AddProductPage from './components/Admin/Products/AddProductPage'; // Import AddProductPage
import EditProductPage from './components/Admin/Products/EditProductPage'; // Import EditProductPage
import StoresPage from './components/Admin/Stores/StoresPage';
import BillingPage from './components/Shopkeeper/Billing/BillingPage';
import InventoryPage from './components/Shopkeeper/Inventory/InventoryPage';
import OrdersPage from './components/Shopkeeper/Orders/OrdersPage';
import ShopkeeperDashboard from './components/Shopkeeper/Dashboard/ShopkeeperDashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/add" element={<AddProductPage />} /> {/* Add route for AddProductPage */}
          <Route path="products/edit/:productId" element={<EditProductPage />} /> {/* Add route for EditProductPage */}
          <Route path="stores" element={<StoresPage />} />
          <Route path="orders" element={<OrdersPage />} />
        </Route>

        {/* Shopkeeper Routes */}
        <Route path="/shopkeeper" element={<ShopkeeperLayout />}>
          <Route index element={<ShopkeeperDashboard />} />
          <Route path="dashboard" element={<ShopkeeperDashboard />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="orders" element={<OrdersPage />} />
        </Route>

        {/* Default redirect to login */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;