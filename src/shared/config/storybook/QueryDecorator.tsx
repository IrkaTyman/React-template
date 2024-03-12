import React from 'react';
import {type Decorator} from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@shared/config/query/queryClient';

/**
 * Storybook-декоратор для работы React-Query
 * @param Story
 */
export const QueryDecorator: Decorator = Story => {
    return (
        <QueryClientProvider client={queryClient}>
            <Story/>
        </QueryClientProvider>
            );
};
