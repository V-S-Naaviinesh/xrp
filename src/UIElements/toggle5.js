import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const BusinessImprovement = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>TYPESCRIPT</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          TYPESCRIPT IS 100% ERROR FREE ADAPTING MYSELF WITH THOSE SKILL 
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default BusinessImprovement;