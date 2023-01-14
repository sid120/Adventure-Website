
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Route, Routes} from'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Pro2 from './components/pages/Pro2';


function App() {
  return (  
    <>
    <Router>
      <Navbar />
       <Routes>
          <Route path='/'   element={<Home/>} />
          <Route path='/services'  element={<Services/>}/>
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-Up'  element={<SignUp/>}/>
          <Route path='/Pro2'  element={<Pro2/>}/>

       </Routes>
      
      </Router>

    </>
  );
}

export default App;
