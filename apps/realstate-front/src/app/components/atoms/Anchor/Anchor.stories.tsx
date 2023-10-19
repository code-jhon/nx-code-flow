import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from './Anchor';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Anchor> = {
  component: Anchor,
  tags: ['autodocs'],
  title: 'Atoms/Anchor',
};
export default meta;
type Story = StoryObj<typeof Anchor>;

export const Heading: Story = {
  args: {
    children: 'Welcome to Anchor!',
    action: () => {alert('clicked')},
    size: 'xs',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Anchor!/gi)).toBeTruthy();
  },
};

export const size_xs = {
  args: {
    children: 'Welcome to Anchor!',
    action: () => {alert('clicked')},
    size: 'xs',
  },
};

export const size_sm = {
  args: {
    children: 'Welcome to Anchor!',
    action: () => {alert('clicked')},
    size: 'sm',
  },
};

export const size_md = {
  args: {
    children: 'Welcome to Anchor!',
    action: () => {alert('clicked')},
    size: 'md',
  },
};

export const size_lg = {
  args: {
    children: 'Welcome to Anchor!',
    action: () => {alert('clicked')},
    size: 'lg',
  },
};

export const size_xl = {
  args: {
    children: 'Welcome to Anchor!',
    action: () => {alert('clicked')},
    size: 'xl',
  },
};

export const additionalStyles = {
  args: {
    children: 'Welcome to Anchor!',
    action: () => {alert('clicked')},
    additionalStyles: 'text-red-500',
  },
};

export const action = {
  args: {
    children: 'Welcome to Anchor!',
    action: () => {alert('clicked')},
  },
};

