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
            
        Working in my dad Accounting Firm for past 5 Years but experiencing the situation since young.Improving the business into digital world as the world progress adapting the situation.





          </CardBody>
        
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;