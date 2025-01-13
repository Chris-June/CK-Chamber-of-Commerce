import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes as RoutesComponent, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Home from './pages/home/Home';
import BusinessList from './pages/businesses/BusinessList';
import BusinessDetail from './pages/businesses/BusinessDetail';
import AboutUs from './pages/AboutUs/AboutUs';
import Advocacy from './pages/Advocacy/Advocacy';
import CKCCTV from './pages/CKCCTV/CKCCTV';
import ShopLocal from './pages/ShopLocal/ShopLocal';
import Footer from './components/layout/Footer';
import { Events } from './pages/Events/Events';

function RouteDebugger() {
  const location = useLocation();
  
  useEffect(() => {
    console.error('🚦 Current Route:', location.pathname);
    console.error('🚦 Current Search:', location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <Provider store={store}>
          <Router>
            <RouteDebugger />
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <RoutesComponent>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/advocacy" element={<Advocacy />} />
                  <Route path="/CKCCTV" element={<CKCCTV />} />
                  <Route path="/shop-local" element={<ShopLocal />} />
                  <Route
                    path="/businesses"
                    element={<BusinessList />}
                  />
                  <Route
                    path="/businesses/:businessId"
                    element={<BusinessDetail />}
                  />
                  <Route
                    path="/dashboard"
                    element={<div>Dashboard Coming Soon</div>}
                  />
                  <Route path="/login" element={<div>Login Page Coming Soon</div>} />
                  <Route path="/events" element={<Events />} />
                </RoutesComponent>
              </main>
              <Footer />
            </div>
          </Router>
        </Provider>
      </HelmetProvider>
    </React.StrictMode>
  );
}
export default App;
