import type { Meta, StoryObj } from '@storybook/react';
import PasswordRecovery from './PasswordRecovery';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PasswordRecovery> = {
  component: PasswordRecovery,
  title: 'PasswordRecovery',
};
export default meta;
type Story = StoryObj<typeof PasswordRecovery>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PasswordRecovery!/gi)).toBeTruthy();
  },
};
