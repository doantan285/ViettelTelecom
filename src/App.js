import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './common-components/Header';
import HomePage from './page/Home';
import IntroductionPage from './page/Introduction';
import NewsPage from '~/page/News';
import ShopPage from '~/page/Shop';
import ServiceQualityPage from './page/ServiceQuality';
import Footer from './common-components/Footer';

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/introduction" element={<IntroductionPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/service-quality" element={<ServiceQualityPage />} />
                <Route path="shop" element={<ShopPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
