import { type ReactRenderer } from '@storybook/react';
import '../../../styles/index.css';
import { type DecoratorFunction } from '@storybook/csf';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: DecoratorFunction<ReactRenderer> =
    Story => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
