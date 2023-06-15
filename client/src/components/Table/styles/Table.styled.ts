import styled, { css } from 'styled-components';

import { breakPoints, globalStyles } from '../../../utils';

const { lg, md } = breakPoints;
const { borderLight, borderRegular } = globalStyles;

export type Props = {
  colsNumber: number;
};

export const Table = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ colsNumber }) => `repeat(${colsNumber}, 1fr)`};
  overflow: scroll;

  ${({ colsNumber }) => css`
    span {
      padding: 1rem 0.3rem;
      border-bottom: ${borderLight};

      @media ${md} {
        padding: 1.2rem 0.3rem;
      }

      @media ${lg} {
        font-size: 1.1rem;
      }

      &:nth-child(-n + ${colsNumber}) {
        border-bottom: ${borderRegular};

        @media ${md} {
          & > * {
            font-size: 1.1rem;
          }
        }

        @media ${lg} {
          & > * {
            font-size: 1.3rem;
          }
        }
      }

      &:nth-last-child(-n + ${colsNumber}) {
        border-bottom: none;
      }
    }
  `}
`;
