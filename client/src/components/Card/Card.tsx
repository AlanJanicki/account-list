import React, { PropsWithChildren } from 'react';

import * as Styled from './styles/Card.styled';

type Props = {
  header?: string;
};

export const Card = ({ children, header }: PropsWithChildren<Props>) => (
  <Styled.Card>
    <Styled.Header>
      <h1>{header}</h1>
    </Styled.Header>
    <Styled.Body>{children}</Styled.Body>
  </Styled.Card>
);
