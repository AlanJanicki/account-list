import styled from 'styled-components';

import { breakPoints, globalStyles } from '../../../utils';
const { lg } = breakPoints;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Error = styled.span`
  color: #dd3546;

  @media ${lg} {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  margin: 2rem auto 0 auto;
  padding: 0.5rem;
  width: 50%;
  background-color: #0f7bff;
  ${globalStyles.roundBorders}
  border: 1px solid transparent;
  color: #fff;
  font-weight: 400;

  @media ${lg} {
    font-size: 1.2rem;
  }
`;
