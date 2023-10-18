import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Img> = {
  component: Img,
  title: 'Img',
};
export default meta;
type Story = StoryObj<typeof Img>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Img!/gi)).toBeTruthy();
  },
};
