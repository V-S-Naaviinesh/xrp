import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const Taxation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Taxation</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          ♣STAMPS ♣E-Filing ♣Form B ♣Form BE ♣Form P ♣Form M ♣Form E ♣Form C ♣Form C1 ♣Form R ♣CP 204 ♣CP 204A ♣Form TF ♣Form TC ♣Form TA ♣Form PT
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Taxation;