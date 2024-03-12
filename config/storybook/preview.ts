import type { Preview } from '@storybook/react';

import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { QueryDecorator } from '../../src/shared/config/storybook/QueryDecorator';
import { I18NextDecorator } from '../../src/shared/config/storybook/I18NextDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        QueryDecorator,
        I18NextDecorator,
        SuspenseDecorator,
    ],
};

export default preview;
