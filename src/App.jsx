import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import RequestPage from './RequestPage/RequestPage';
import BlogPage from './BlogPage/BlogPage';


export default () => {

  return (


    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>


  )
}