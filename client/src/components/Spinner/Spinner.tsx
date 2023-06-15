import React from 'react';

import * as Styled from './styles/Spinner.styled';

type Props = { width?: number };

export const Spinner = ({ width = 50 }: Props) => (
  <p role='status'>
    <Styled.Spinner width={width} />
  </p>
);
