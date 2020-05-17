import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import './about-us.css';
import OfficePic from './20190626_175532.jpg'
import Ewallet from './E-Wallet is accepted here (2).jpg'
import Mbrs from './Annotation 2019-07-01 101003.jpg'
import Act777 from './act777Pic.jpg'
import MainEnterance from './20190627_162634.jpg'
import Button from '@material-ui/core/Button';
import Daddy from './WhatsApp Image 2020-04-05 at 7.48.18 AM.jpeg'
import Me from './20200401_095146-ANIMATION.gif'



const AboutUs = () => {
  return (
    <React.Fragment>
<div className="cardUp">
<CardGroup>
  <Card>
  <Card.Img variant="top" src={Daddy} style={{height:"50%",width:"100%"}} />
    <Card.Body>
      <Card.Title>The Leader</Card.Title>
      <Card.Text>
       <p>Silvernathan A/L M.K.Vallipuram</p> 
       <p>@ NATHAN</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Me} style={{width:"100%", height:"50%"}}/>
    <Card.Body> 
      <Card.Title>Leader's Jr.</Card.Title>
      <Card.Text>
        <p>V.S.Naaviinesh</p>
        <p>@ SELVA</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
    </Card>
  <Card>
  <Card.Img variant="top" src= {MainEnterance} style={{height:"50%"}} />
    <Card.Body>
      <Card.Title>Main Enterance</Card.Title>
      <Card.Text>
        NMS Welcomes You!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
 
    
  
 
</CardGroup>
</div>

<div className="cardDown">

<CardGroup>
<Card>
<Card.Img variant="top" src={OfficePic} />
    <Card.Body>
      <Card.Title>TheTeam'sTerrain</Card.Title>
      <Card.Text>
      The playground of our professional team!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>

<Card>
    <Card.Img variant="top" src={Act777} style={{height:"50%"}} />
    <Card.Body>
      <Card.Title>TheBook</Card.Title>
      <Card.Text>
        To be obeyed!
      
        <Button variant="contained" color="secondary" disableElevation>
        
          <a href="http://www.federalgazette.agc.gov.my/outputaktap/aktaBI_20160915_CompaniesAct2016Act777.pdf">READ ME?</a>

        </Button>
      
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
 


<Card>
    <Card.Img variant="top" src={Ewallet} />
    <Card.Body>
      <Card.Title>E-Wallet's Accepted Here!</Card.Title>
      <Card.Text>
        The above E-Wallet's payment is accepted.Minable cryptocurrency is accepted upon request.Cash is King always!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  
  </CardGroup>

</div>
<div className="cardLast">
<Card>
<Card.Img variant="top" src={Mbrs} />
    <Card.Body>
      <Card.Title>MBRS</Card.Title>
      <Card.Text>
        We are the one of the early adoptors of the online submitions.We do provide MAKERS services for AnnualReport & Annual Return lodgements.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</div>

</React.Fragment>
)
}
export default AboutUs;
