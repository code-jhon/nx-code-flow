import type { Meta, StoryObj } from '@storybook/react';
import SignIn from './SignIn';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignIn> = {
  component: SignIn,
  title: 'SignIn',
};
export default meta;
type Story = StoryObj<typeof SignIn>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SignIn!/gi)).toBeTruthy();
  },
};
