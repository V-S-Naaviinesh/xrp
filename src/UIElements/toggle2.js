import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Button.css';

const Accounting = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>SLEEP</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="ShowMore">
          Sleep is a naturally recurring state of mind and body, characterized by altered consciousness, relatively inhibited sensory activity, reduced muscle activity and inhibition of nearly all voluntary muscles during rapid eye movement (REM) sleep,[1] and reduced interactions with surroundings.[2] It is distinguished from wakefulness by a decreased ability to react to stimuli, but more reactive than a coma or disorders of consciousness, with sleep displaying different, active brain patterns.

Sleep occurs in repeating periods, in which the body alternates between two distinct modes: REM sleep and non-REM sleep. Although REM stands for "rapid eye movement", this mode of sleep has many other aspects, including virtual paralysis of the body. A well-known feature of sleep is the dream, an experience typically recounted in narrative form, which resembles waking life while in progress, but which usually can later be distinguished as fantasy. During sleep, most of the body's systems are in an anabolic state, helping to restore the immune, nervous, skeletal, and muscular systems;[3] these are vital processes that maintain mood, memory, and cognitive function, and play a large role in the function of the endocrine and immune systems.[4] The internal circadian clock promotes sleep daily at night. The diverse purposes and mechanisms of sleep are the subject of substantial ongoing research.[5] Sleep is a highly conserved behavior across animal evolution.[6]

Humans may suffer from various sleep disorders, including dyssomnias such as insomnia, hypersomnia, narcolepsy, and sleep apnea; parasomnias such as sleepwalking and rapid eye movement sleep behavior disorder; bruxism; and circadian rhythm sleep disorders. The use of artificial light has substantially altered humanity's sleep patterns.
         
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Accounting;