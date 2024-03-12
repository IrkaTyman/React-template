import { Decorator } from '@storybook/react';
import { SuspenseWrapper } from '@shared/mock/axios/SuspenseWrapper';

export const SuspenseDecorator: Decorator = Story => {
    return SuspenseWrapper(<Story/>);
};
