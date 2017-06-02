import React from 'react';
import styled from 'styled-components';
import { Section, Container, Box } from 'hedron';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <Section>
    <Container>
      <Box>
        <Title>Hello, World!</Title>
      </Box>
    </Container>
  </Section>
);
