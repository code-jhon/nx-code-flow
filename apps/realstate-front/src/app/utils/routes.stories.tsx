import type { Meta, StoryObj } from '@storybook/react';
import { router } from './routes';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof router> = {
  component: router,
  title: 'router',
};
export default meta;
type Story = StoryObj<typeof router>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to router!/gi)).toBeTruthy();
  },
};
