import type { Meta, StoryObj } from '@storybook/react';
import { PasswordRecoveryPage } from './PasswordRecoveryPage';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PasswordRecoveryPage> = {
  component: PasswordRecoveryPage,
  title: 'PasswordRecoveryPage',
};
export default meta;
type Story = StoryObj<typeof PasswordRecoveryPage>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PasswordRecoveryPage!/gi)).toBeTruthy();
  },
};
