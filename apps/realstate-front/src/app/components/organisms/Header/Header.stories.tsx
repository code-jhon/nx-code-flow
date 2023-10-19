import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  title: 'organisms/Header',
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    headerText: 'Welcome to Header!',
    subHeaderText: 'Welcome to Header!',
    subText: 'Welcome to Header!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Header!/gi)).toBeTruthy();
  },
};
