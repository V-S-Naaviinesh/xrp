import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const CorporateSecretarial = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>CorporateSecretarial</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          ♠Incorporation of Company ♠Resolutions ♠Reminders ♠Share Transfer ♠Share Capital Increse/Decrease ♠Annual Return ♠Annual Report ♠Striking-Off ♠Winding Up ♠Schedule A ♠Schedule B ♠Schedule C ♠Listed Only Commonly Requested Services Out Of Hundreds Of Secretary Duties
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CorporateSecretarial;