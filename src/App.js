import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from './pages/Home/Index';
import Products from './pages/Products/Index';

import store from './pages/redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <div className="container mt-3">
            <div className="row">
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path='/products' element={<Products />} />
              </Routes>
            </div>
          </div>
        </Provider>
      </BrowserRouter>

    </>
  );
}


export default App;
