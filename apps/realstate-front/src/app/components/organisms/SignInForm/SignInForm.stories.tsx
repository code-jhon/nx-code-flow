import type { Meta, StoryObj } from '@storybook/react';
import { SignInForm } from './SignInForm';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'organisms/SignInForm',
};
export default meta;
type Story = StoryObj<typeof SignInForm>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SignInForm!/gi)).toBeTruthy();
  },
};
