import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const AuditingAuditorIntroducing = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>AuditorIntroducer</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          ♦Well Experinced Auditors
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default AuditingAuditorIntroducing;