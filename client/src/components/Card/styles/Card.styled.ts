import styled from 'styled-components';

import { breakPoints, globalStyles } from '../../../utils';

const { lg, md, sm } = breakPoints;

export const Card = styled.div`
  margin: 0 auto;
  width: 80%;
  ${globalStyles.roundBorders};
`;

export const Header = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;

  @media ${sm} {
    height: 3.5rem;
  }

  h1 {
    @media ${sm} {
      font-size: 1.1rem;
    }

    @media ${md} {
      font-size: 1.2rem;
    }

    @media ${lg} {
      font-size: 1.5rem;
    }
  }
`;

export const Body = styled.div`
  padding: 1rem;
  display: grid;
`;
