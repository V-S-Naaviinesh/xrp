import React from 'react';
import CorporateSecretarial from '../UIElements/toggle1';
import Taxation from '../UIElements/toggle4';
import Accounting from '../UIElements/toggle2';
import AuditingAuditorIntroducing from '../UIElements/toggle3';
import BusinessImprovement from '../UIElements/toggle5';
import {Button} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import BiztrustLogo from './1svg.svg';



const HomeThree = () => {
    return (
        <React.Fragment>
              <div>
            <h3>Detailed Services</h3>
            <p>**click for more info**</p>
            <CorporateSecretarial/>
            <Accounting/>
            <AuditingAuditorIntroducing/>
            <Taxation/>
            <BusinessImprovement/>
        </div>
        <div>
            
            <h3>THANKS FOR YOUR INTEREST</h3>
            <h3>PLEASE CONTACT US.</h3>
           <NavLink to="/contact-us">
            <Button color="secondary" style={{color:"black", fontSize:"1rem"}}>
                Contact Now
                </Button>  
         </NavLink>
                 ♾️
         <NavLink to="./about-us">
            <Button color="secondary" style={{color:"black", fontSize:"1rem"}}>
                Go To Gallery
            </Button>
         </NavLink>

            <h1>---</h1>

        <div>
            <a href="https://biztrust.ssm.com.my/">
            <img src={BiztrustLogo} alt="BizTrust Logo" />
            </a>
        
        </div>




        </div>


        </React.Fragment>
      
    )
}

export default HomeThree;