import type { Meta, StoryObj } from '@storybook/react';
import { SignUpPage } from './SignUpPage';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignUpPage> = {
  component: SignUpPage,
  title: 'SignUpPage',
};
export default meta;
type Story = StoryObj<typeof SignUpPage>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SignUpPage!/gi)).toBeTruthy();
  },
};
