import { Meta, StoryObj } from '@storybook/react';

import { Input } from '@shared/ui';

import { Button, Props } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        children: 'Click',
    },
};

export const SolidDefault: Story = {
    args: {
        children: 'Click',
        color: 'default',
    },
};

export const SolidDanger: Story = {
    args: {
        children: 'Click',
        color: 'danger',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Click',
    },
};

export const Flat: Story = {
    args: {
        variant: 'flat',
        children: 'Click',
    },
};

export const FlatDanger: Story = {
    args: {
        variant: 'flat',
        color: 'danger',
        children: 'Click',
    },
};

export const FlatDefault: Story = {
    args: {
        variant: 'flat',
        color: 'default',
        children: 'Click',
    },
};

export const Bordered: Story = {
    args: {
        variant: 'bordered',
        children: 'Click',
    },
};

export const BorderedDanger: Story = {
    args: {
        variant: 'bordered',
        color: 'danger',
        children: 'Click',
    },
};

export const BorderedDefault: Story = {
    args: {
        variant: 'bordered',
        color: 'default',
        children: 'Click',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
        children: 'Click',
    },
};

export const TextDanger: Story = {
    args: {
        variant: 'text',
        color: 'danger',
        children: 'Click',
    },
};

export const TextDefault: Story = {
    args: {
        variant: 'text',
        color: 'default',
        children: 'Click',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Click',
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
        children: 'Click',
    },
};
