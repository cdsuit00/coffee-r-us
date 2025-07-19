import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import other components later (Shop, AdminPortal)
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add Shop and Admin routes later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;