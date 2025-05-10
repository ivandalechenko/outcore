import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import RequestPage from './RequestPage/RequestPage';
import BlogPage from './BlogPage/BlogPage';
import Accounts from './Pages/Accounts/Accounts';
import Services from './Pages/Services/Services';
import { useEffect, useState } from 'react';
import languageStore from './languageStore';


import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Preloader from './Pages/Preloader/Preloader';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);



export default () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    languageStore.setLanguage(languageStore.activeLanguage)
  }, [])

  useEffect(() => {
    languageStore.setLanguage(languageStore.activeLanguage);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (


    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<HomePage type={2} />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>


  )
}