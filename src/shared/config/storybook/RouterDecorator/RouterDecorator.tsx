import { type ReactRenderer } from '@storybook/react';
import '@shared/styles/index.scss';
import { type DecoratorFunction } from '@storybook/csf';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: DecoratorFunction<ReactRenderer> =
    Story => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
