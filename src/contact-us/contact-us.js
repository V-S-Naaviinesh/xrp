import React from 'react';
import './contact-us.css';
import Button from '@material-ui/core/Button';

const ContactUs = () => {
    return (
        <div className='contactUs'>
  <h3>Have a Word</h3>
  <h3>Be Our Friend</h3>
  <br/>
  <h1>Nathan</h1>
  <p>+6012-45 10 658</p>
  <p>nms.perak@gmail.com</p>

    <Button variant="contained" color="success" disableElevation>

             <a href='https://www.google.com/maps/place/Nathan+Management+Services/@4.5985993,101.0940411,17z/data=!3m1!4b1!4m5!3m4!1s0x31caec7ea98be341:0xf99f32d567751af6!8m2!3d4.5985993!4d101.0940411'>Find Us On Google Maps</a>
            
    </Button>
   

    <p></p>
    <h5>Address</h5>
    <p>C-2-06, 2nd Floor,</p>
    <p>No.2, Persiaran Greentown 3,</p>
    <p>Greentown Business Centre</p>
    <p>30450 Ipoh</p>
    <p>Perak Malaysia</p>

    <Button variant="contained" color="happy" disableElevation>
            <a href='https://nathan-management-services.business.site/'>Our Google Website</a>

    </Button>
    <p></p>
    <h5>Office Hours</h5>
    <p>Weekdays</p>
    <p>9am - 5pm</p>
    <p>LunchBreak 1-2pm</p>
    <p>Closed on Weekend and Public Holidays</p>
    <p></p>
        </div>
    
    )
}

export default ContactUs;