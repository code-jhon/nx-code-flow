import type { Meta, StoryObj } from '@storybook/react';
import { SignInPage } from './SignInPage';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignInPage> = {
  component: SignInPage,
  title: 'SignInPage',
};
export default meta;
type Story = StoryObj<typeof SignInPage>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SignInPage!/gi)).toBeTruthy();
  },
};
