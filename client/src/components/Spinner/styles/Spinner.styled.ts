import styled from 'styled-components';

type Props = {
  width?: number;
};

export const Spinner = styled.span<Props>`
  width: ${({ width }) => `${width}px`};
  display: block;
  aspect-ratio: 1;
  border: 3px solid #0f7bff;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
