import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import MyNavbar from './Navbar';
// import EcommerceCarousel from './Slider';
// import CardsSection from './Card';
// import AboutUs from './Aboutus';
// import ContactUs from './Contactus';
// import Style from './Home';
import Footer from './Fotter';
import reportWebVitals from './reportWebVitals';
// import Resume from './Cv';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyNavbar/>
    <EcommerceCarousel/>
    <CardsSection/>
    <AboutUs/>
    <ContactUs/>
    <Style/> */}
    <Footer/>
    {/* <Resume/>     */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
