import type { Meta, StoryObj } from '@storybook/react';
import Anchor from './Anchor';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Anchor> = {
  component: Anchor,
  title: 'Anchor',
};
export default meta;
type Story = StoryObj<typeof Anchor>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Anchor!/gi)).toBeTruthy();
  },
};
