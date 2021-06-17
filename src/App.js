import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom'
import Home from './Home/home';
import ContactUs from './contact-us/contact-us';
import AboutUs from './about-us/about-us';
import './App.css';
import MainNavigation from './component/MainNavigation';
import HomeOne from './Home/home1';
import HomeTwo from './Home/home2';
import HomeThree from './Home/home3';
import HomeFive from './Home/home5';



const App = () => {
  return (
    <Router >
      <div className='Complete-Background'>
      <MainNavigation/>
   <div className="App-body">
      <Switch>
        <Route path='/home' exact>
          <div className="App-home">
          <Home />
          </div>
          <div className="App-homeOne">
            <HomeOne/>
          </div>
          <div className="App-HomeTwo">
            <HomeTwo/>
            </div>
            <div className="App-HomeThree">
              <HomeThree/>
            </div>
            <div className="App-HomeFive">
              <HomeFive/>
            </div>
        </Route>
        <Route path='/about-us'> 
            <AboutUs/>
            <div className="App-HomeFive">
              <HomeFive/>
            </div>
            
        </Route>
        <Route path='/contact-us'>
            <ContactUs/>
            <div className="App-HomeFive">
              <HomeFive/>
            </div>
        </Route> 
        <Redirect to='/home' />
      </Switch>
   </div>
   </div>
    </Router>
  )
}

export default App;
