import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage/loginPage';
import HomePage from './pages/HomePage/homePage';
import RegisterPage from './pages/RegisterPage/registerPage';
import DetailPage from './pages/DetailPage/detailPage';
import { Provider } from 'react-redux';
import store from './store';
import ProfilPage from './pages/ProfilPage/profilPage';
import AddProduct from './pages/AddProduct/AddProduct';
import UpdateProducts from './pages/UpdadeProductPage/UpdateProduct';
import ConfirmAction from './pages/ConfirmAction/confirmAction';
import PaymentPage from './pages/PaymentPage/paymentPage';
import ConfirmPurchase from './pages/ConfirmPurchase/confirmPurchase'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path='/add_product' element={<AddProduct/>} />
          <Route path='/:id/update_product' element={<UpdateProducts/>} />
          <Route path='/confirmAction' element={<ConfirmAction/>} />
          <Route path='/payment' element={<PaymentPage/>} />
          <Route path='/thanks' element={<ConfirmPurchase/>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
