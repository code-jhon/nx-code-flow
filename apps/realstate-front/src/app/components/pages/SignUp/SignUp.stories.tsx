import type { Meta, StoryObj } from '@storybook/react';
import SignUp from './SignUp';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignUp> = {
  component: SignUp,
  title: 'SignUp',
};
export default meta;
type Story = StoryObj<typeof SignUp>;

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SignUp!/gi)).toBeTruthy();
  },
};
