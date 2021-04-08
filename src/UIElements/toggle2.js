import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const Accounting = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>HTML</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          -BEGINNER LEVEL-Currently refering to https://www.w3schools.com/ and still educating myself
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Accounting;