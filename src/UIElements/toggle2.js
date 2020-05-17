import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const Accounting = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Accounting</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          ♥Accounting ♥Book-keeping ♥Clients Account ♥Payroll ♥Accounting Software ♥Accounting + Stock + Billing Software ♥Payroll Software ♥Clients Account Software ♥Software Are Lifetime No Monthly/Annual Subcription ♥Software Training & Installation
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Accounting;