import type { Preview } from '@storybook/react';

import { StyleDecorator } from '@shared/mock/storybook/StyleDecorator';
import { QueryDecorator } from '@shared/mock/storybook/QueryDecorator';
import { I18NextDecorator } from '@shared/mock/storybook/I18NextDecorator';
import { SuspenseDecorator } from '@shared/mock/storybook/SuspenseDecorator';

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
