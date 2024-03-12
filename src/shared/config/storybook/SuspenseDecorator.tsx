import { Decorator } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator: Decorator = Story => {
    return (
        <Suspense fallback={'Loading...'}>
            <Story />
        </Suspense>
    );
};
