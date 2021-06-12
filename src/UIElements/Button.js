import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';




const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>About Myself</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          
          <CardBody className="ShowMore">
            
        I myself Doesn't know What i Know





          </CardBody>
        
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;