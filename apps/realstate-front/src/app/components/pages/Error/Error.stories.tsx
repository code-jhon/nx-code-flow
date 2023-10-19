import type { Meta, StoryObj } from '@storybook/react';
import Error from './Error';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Error> = {
  component: Error,
  title: 'Error',
};
export default meta;
type Story = StoryObj<typeof Error>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Error!/gi)).toBeTruthy();
  },
};
