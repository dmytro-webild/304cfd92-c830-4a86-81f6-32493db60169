import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContainersPage from './pages/ContainersPage';
import CustomPage from './pages/CustomPage';
import DeliveryPage from './pages/DeliveryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/containers" element={<ContainersPage />} />
        <Route path="/custom" element={<CustomPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
