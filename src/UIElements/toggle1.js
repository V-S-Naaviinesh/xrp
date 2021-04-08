import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const CorporateSecretarial = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>REACT JS</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          Started my 1st react js project during COVID-19 outbreak.Learned completely from outsourced websites and official react website
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CorporateSecretarial;