import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from './pages/Home/Index';
import Products from './pages/Products/Index';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path='/products' element={<Products />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </>
  );
}


export default App;
