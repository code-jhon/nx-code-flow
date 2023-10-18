import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FormField> = {
  component: FormField,
  title: 'FormField',
};
export default meta;
type Story = StoryObj<typeof FormField>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FormField!/gi)).toBeTruthy();
  },
};
