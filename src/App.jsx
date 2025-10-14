import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BrandPage from "./pages/brand/brandPage";
import CategoryPage from "./pages/category/CategoryPage.jsx";
import ProductPage from "./pages/product/productPage";
import Sidebar from "./components/Sidebar.jsx"
import Navbar from "./components/Navbar.jsx";



function App() {
  return (
    <>
      <Router>
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
          {/* Navbar at the top */}
          <Navbar />

          <div className="d-flex flex-grow-1">
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main content area */}
            <div className="flex-grow-1 p-4 bg-light">
              <Routes>
                <Route path="/brands" element={<BrandPage />} />
                <Route path="/categories" element={<CategoryPage />} />
                <Route path="/products" element={<ProductPage />} />
              
                <Route path="*" element={<h1>Page Not Found</h1>} />
              </Routes>
            </div>
          </div>
        </div>

        {/* Toast Notifications */}
        <ToastContainer position="top-right" autoClose={2000} />
      </Router>
    </>
  );
}

export default App;