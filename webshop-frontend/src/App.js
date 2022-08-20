import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import ProductDetail from './routes/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsPage from './routes/ProductsPage';
import CartPage from './routes/CartPage';
import LoginPage from "./routes/LoginPage";
import ResetPasswordPage from "./routes/ResetPasswordPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/Password" element={<ResetPasswordPage />} />
          <Route exact path="/product-detail" element={<ProductDetail />} />
          <Route exact path="/category" element={<ProductsPage />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
