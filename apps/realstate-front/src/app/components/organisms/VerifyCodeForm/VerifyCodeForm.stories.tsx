import type { Meta, StoryObj } from '@storybook/react';
import { VerifyCodeForm } from './VerifyCodeForm';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof VerifyCodeForm> = {
  component: VerifyCodeForm,
  title: 'VerifyCodeForm',
};
export default meta;
type Story = StoryObj<typeof VerifyCodeForm>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to VerifyCodeForm!/gi)).toBeTruthy();
  },
};
