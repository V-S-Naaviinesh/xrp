import React from 'react';
import Button from '@material-ui/core/Button';


import './about-us.css';

const AboutUs = () => (
    <React.Fragment>
        <div className="fullpage">
    <div>
        <h1 className="leader-title">My 1st project</h1>
        <Button variant="contained" color="secondary" disableElevation>
        <a href="https://master.d3re8t91yliw1s.amplifyapp.com/home">Go to Website</a>
        </Button>
        <p>Nathan Management Services</p>
      
       

    </div>
    
    <br/>
    <div> 
        <h1>My Second Project</h1>
        <p>E-Commerce</p>
        <Button variant="contained" color="secondary" disableElevation>
        <a href="https://master.d221hlj9cd1o1n.amplifyapp.com/">Go to Website</a>
        </Button>
    

    </div>
    <br/>
 
    <br/>
  
    <br/>
  
    <br/>
   </div>
    </React.Fragment>
)

export default AboutUs;