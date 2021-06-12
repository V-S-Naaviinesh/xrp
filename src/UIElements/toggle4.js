import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const Taxation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>REPEAT</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          to happen, or to do something, more than once
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Taxation;