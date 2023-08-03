import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './language/i18n';
import Navbar from './Navbar/Navbar';
import ContactSection from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </I18nextProvider>
  );
}

export default App;




