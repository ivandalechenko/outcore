import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import RequestPage from './RequestPage/RequestPage';
import BlogPage from './BlogPage/BlogPage';
import Accounts from './Pages/Accounts/Accounts';
import Services from './Pages/Services/Services';



export default () => {

  return (


    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
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