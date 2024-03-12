import { type Decorator } from '@storybook/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';

import i18next from '@shared/config/i18n/i18n';

export const I18NextDecorator: Decorator = Story => {
    return (
        <I18nextProvider i18n={i18next}>
            <Story />
        </I18nextProvider>
    );
};
