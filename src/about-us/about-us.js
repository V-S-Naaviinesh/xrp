import React from 'react';
import Button from '@material-ui/core/Button';


import './about-us.css';

const AboutUs = () => (
    <React.Fragment>
        <div className="fullpage">
    <div>
        <h1 className="leader-title">TheLeader</h1>
        <p>Silvernathan s/o M.K.Vallipuram</p>
        <p>@  Nathan</p>
        <div className="leader"/>

    </div>
    
    <br/>
    <div> 
        <h1>Main Entrance</h1>
        <p>NMS Welcomes You!</p>
        <div className="main-entrance"/>

    </div>
    <br/>
    <div>
        <h1>TheTeam'sTerrain</h1>
        <p>The playground of our professional team!</p>
    </div>
    <div className="terrain"/>
    <br/>
    <div>
        <h1>TheBook</h1>
        <p>To be obeyed!</p>
        <Button variant="contained" color="secondary" disableElevation>
        <a href="http://www.federalgazette.agc.gov.my/outputaktap/aktaBI_20160915_CompaniesAct2016Act777.pdf">READ ME?</a>
        </Button>
        <div className="thebook"/>

    </div>
    <br/>
    <div>
        <h1>E-Wallet's Accepted Here!</h1>
        <p> The shown E-Wallet's payment is accepted.Minable cryptocurrency is accepted upon request.Cash is King always!</p>
        <div className="ewallet"/>
   </div>
   <br/>
   <div>
       <h1>MBRS</h1>
       <p>We are one of the early adoptors of the online submitions.We do provide MAKERS services for AnnualReport & Annual Return lodgements.</p>
       <div className="mbrs"/>
   </div>
   <br/>
    <div> 
        <h1>SSM Biztrust Cert</h1>
        <p>Accredited with Biztrust Registration</p>
        <div className="biztrust-cert"/>

    </div>
    <br/>
   </div>
    </React.Fragment>
)

export default AboutUs;