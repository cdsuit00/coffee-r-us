import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
// import other components later (Shop, AdminPortal)
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* Add Shop and Admin routes later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;