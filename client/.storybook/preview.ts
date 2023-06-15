import type { Preview } from '@storybook/react';
import '../src/index.css';
import { initialize } from 'msw-storybook-addon';

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
