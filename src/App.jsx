import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PressRelease from './pages/PressRelease';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dontcrack-press-release" element={<PressRelease />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
