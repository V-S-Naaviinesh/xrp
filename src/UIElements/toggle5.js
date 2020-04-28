import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const BusinessImprovement = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>BusinessImprovement</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          ☻Company Profile Write-Up ☻Business Plan Write-Up ☻Business Registration ☻Trademark ☻Industrial Design ☻Geographical Indication ☻Copyright ☻R.O.S Advisory ☻Web-Developing ☻Google Advertising ☻Numerology For BusinessNames
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default BusinessImprovement;