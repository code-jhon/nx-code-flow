import type { Meta, StoryObj } from '@storybook/react';
import NewPassword from './NewPassword';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NewPassword> = {
  component: NewPassword,
  title: 'NewPassword',
};
export default meta;
type Story = StoryObj<typeof NewPassword>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to NewPassword!/gi)).toBeTruthy();
  },
};
