import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';

const Loader = () => {
  return (
    <Container>
      <Message icon size="big">
        <Icon name="circle notched" Loading... />
        <Message.Content>
          <Message.Header>Just one second</Message.Header>
          Questions coming right up!
        </Message.Content>
      </Message>
    </Container>
  );
};

export default Loader;
