import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const CorporateSecretarial = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>EAT</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          Eating (also known as consuming) is the ingestion of food, typically to provide a heterotrophic organism with energy and to allow for growth. Animals and other heterotrophs must eat in order to survive — carnivores eat other animals, herbivores eat plants, omnivores consume a mixture of both plant and animal matter, and detritivores eat detritus. Fungi digest organic matter outside their bodies as opposed to animals that digest their food inside their bodies. For humans, eating is an activity of daily living. Some individuals may limit their amount of nutritional intake. This may be a result of a lifestyle choice, due to hunger or famine, as part of a diet or as religious fasting.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CorporateSecretarial;