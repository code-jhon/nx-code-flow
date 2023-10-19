import type { Meta, StoryObj } from '@storybook/react';
import {Toast} from './Toast';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Toast> = {
  component: Toast,
  tags: ['autodocs'],
  title: 'Atoms/Toast',
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Success = {
  args: {
    isSB: true,
    message: 'Welcome to Toast!',
    duration: 30000000,
    type: 'success',
  },
};

export const Info: Story = {
  args: {
    isSB: true,
    message: 'Welcome to Toast!',
    duration: 30000000,
    type: 'info',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Toast!/gi)).toBeTruthy();
  },
};

export const Error = {
  args: {
    isSB: true,
    message: 'Welcome to Toast!',
    duration: 30000000,
    type: 'error',
  },
};
