import type { Preview } from '@storybook/react';

import { RouterDecorator } from '@shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '@shared/config/storybook/StyleDecorator';

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
        RouterDecorator,
    ],
};

export default preview;
