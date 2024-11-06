import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Tramites } from '../pages/Tramites';
import { TramitePage } from '../pages/TramitePage';
import { TramitePage2 } from '../pages/TramitePage2';
import { TramitePage3 } from '../pages/TramitePage3';
import PaymentFormPage from "../pages/PaymentFormPage";  // Página de pago
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/mis-tramites' element={<Tramites />} />
        <Route path='/tramite-licenciatura' element={<TramitePage />} />
        <Route path='/tramite-doctorado' element={<TramitePage2 />} />
        <Route path='/tramite-programa-tecnico' element={<TramitePage3 />} />
        <Route path="/payment" element={<PaymentFormPage />} />
      </Routes>
    </BrowserRouter>
  );
};
