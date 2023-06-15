import { Meta, StoryFn } from '@storybook/react';
import { mswDecorator } from 'msw-storybook-addon';
import React from 'react';
import { Provider } from 'react-redux';

import { setupStore } from '../../app/';
import { AccountList } from '../../features';
import { handlers, httpErrors } from '../../mocks/msw/handlers';

export default {
  component: AccountList,
  parameters: {
    msw: {
      handlers,
    },
  },
  title: 'AccountList',
};

const Template = {
  decorators: [
    (Story: StoryFn) => (
      <Provider store={setupStore()}>
        <Story />
      </Provider>
    ),
    mswDecorator,
  ],
} as Meta;

export const Default = { ...Template };

export const HttpError = { ...Template };
HttpError.parameters = {
  msw: {
    handlers: [httpErrors.accounts],
  },
};
