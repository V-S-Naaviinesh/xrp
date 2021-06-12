import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const AuditingAuditorIntroducing = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>RAVE</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          A rave (from the verb: to rave) describes a dance party at a warehouse, public or private property, typically featuring performances by DJs playing electronic dance music. The style is most associated with the early 90s dance music scene when DJs played at illegal events in musical styles dominated by electronic dance music from a wide range of sub-genres, including techno,[1] hardcore, house,[1][2] dubstep,[1] and alternative dance. Occasionally live musicians have been known to perform at raves, in addition to other types of performance artists such as go-go dancers and fire dancers. The music is amplified with a large, powerful sound reinforcement system, typically with large subwoofers to produce a deep bass sound. The music is often accompanied by laser light shows, projected coloured images, visual effects and fog machines.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default AuditingAuditorIntroducing;