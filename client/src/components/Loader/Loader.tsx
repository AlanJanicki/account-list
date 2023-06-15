import React, { PropsWithChildren } from 'react';

import { Spinner } from '..';
import * as Styled from './styles/Loader.styled';

type Props = {
  button?: {
    onClick: () => void;
    text: string;
  };
  error?: string;
  isError?: boolean;
  isLoading: boolean;
};

export const Loader = ({
  button,
  children,
  error,
  isError,
  isLoading
}: PropsWithChildren<Props>) => {
  if (isLoading) {
    return (
      <Styled.Loader>
        <Spinner />
      </Styled.Loader>
    );
  }

  if (isError) {
    return (
      <Styled.Loader>
        <div>
          <Styled.Error>{error}</Styled.Error>
          {typeof button !== 'undefined' && (
            <Styled.Button onClick={button.onClick}>{button.text}</Styled.Button>
          )}
        </div>
      </Styled.Loader>
    );
  }

  return <>{children}</>;
};
