import type { Meta, StoryObj } from '@storybook/react';
import { NewPasswordPage } from './NewPasswordPage';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NewPasswordPage> = {
  component: NewPasswordPage,
  title: 'NewPasswordPage',
};
export default meta;
type Story = StoryObj<typeof NewPasswordPage>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to NewPasswordPage!/gi)).toBeTruthy();
  },
};
