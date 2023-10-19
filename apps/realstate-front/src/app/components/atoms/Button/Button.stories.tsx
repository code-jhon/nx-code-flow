import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Atoms/Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default = {
  args: {
    label: 'Welcome to Button!',
    variant: 'primary',
    fullWidth: false,
    rounded: false,
    onClick: () => {alert('clicked')},
    disabled: false,
  },
};

export const variant_primary = {
  args: {
    label: 'Welcome to Button!',
    variant: 'primary',
    fullWidth: false,
    rounded: false,
    onClick: () => {alert('clicked')},
    disabled: false,
  },
};

export const variant_secondary = {
  args: {
    label: 'Welcome to Button!',
    variant: 'secondary',
    fullWidth: false,
    rounded: false,
    onClick: () => {alert('clicked')},
    disabled: false,
  },
};

export const fullWidth = {
  args: {
    label: 'Welcome to Button!',
    variant: 'primary',
    fullWidth: true,
    rounded: false,
    onClick: () => {alert('clicked')},
    disabled: false,
  },
};

export const rounded = {
  args: {
    label: 'Welcome to Button!',
    variant: 'primary',
    fullWidth: false,
    rounded: true,
    onClick: () => {alert('clicked')},
    disabled: false,
  },
};

export const disabled = {
  args: {
    label: 'Welcome to Button!',
    variant: 'primary',
    fullWidth: false,
    rounded: false,
    onClick: () => {alert('clicked')},
    disabled: true,
  },
};

export const onClick = {
  args: {
    label: 'Welcome to Button!',
    variant: 'primary',
    fullWidth: false,
    rounded: false,
    onClick: () => {alert('clicked')},
    disabled: false,
  },
};

export const Heading: Story = {
  args: {
    label: 'Welcome to Button!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
  },
};
