import styled from 'styled-components';

import { breakPoints } from '../../../utils';

export const Wrapper = styled.div`
  padding-top: 2rem;
`;

export const EmptyList = styled.p`
  text-align: center;

  @media ${breakPoints.lg} {
    font-size: 1.1rem;
  }
`;
