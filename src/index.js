import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Testoutlet from './Testoutlet';
import Contactus from './Contactus';
import Search from './Search';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      
        <Route path="/" element={<App/>}>
          <Route path="/testhomeoutlet" element={<Testoutlet />}>
            <Route path=":params" element={<Testoutlet />}/>
          </Route>
        </Route>

        <Route path="/about" element={<About/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/test" element={<Navigate replce to="/contactus"/>}/>
        <Route path="/search" element={<Search />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
