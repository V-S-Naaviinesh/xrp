import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';




const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Show More</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          
          <CardBody className="ShowMore">
            
          A significant number of our clients are local based and few are foreign based, and we regularly act for a number of limited companies in Malaysia. In some cases we sit on the boards of these companies. We are always prepared to act as a sounding board where required.

We are and have remained out of choice a relatively small firm with a compliment of 1-5 personals at any one time, together with outsourced personals. This enables us to remain flexible, efficient and cost effective.
We are dedicated to our clients and go out of our way to provide a personal and professional service. We speak a number of languages including English, Malay , Tamil.

<div className="New">
<p>We are Authorised and Regulated by the Suruhanjaya Syarikat Malaysia</p>
<p>LisencedSecretary:LS0000223</p>
<p>PractisingCertificate:201908001386 </p>
<div className="Aca"></div>
<p>Association of Certified Accountants (M)</p>
<p>Institute of Public Accountants (IPA Australia)</p>
<p>Chartered Tax Institute of Malaysia</p>
<p>Asian Association of Certified Consultants</p>


</div>




          </CardBody>
        
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;