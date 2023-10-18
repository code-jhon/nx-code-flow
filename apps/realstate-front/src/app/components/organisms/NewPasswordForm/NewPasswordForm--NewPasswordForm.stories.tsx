import type { Meta, StoryObj } from '@storybook/react';
import { NewPasswordForm } from './NewPasswordForm';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NewPasswordForm> = {
  component: NewPasswordForm,
  title: 'NewPasswordForm',
};
export default meta;
type Story = StoryObj<typeof NewPasswordForm>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to NewPasswordForm!/gi)).toBeTruthy();
  },
};
