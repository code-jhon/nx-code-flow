import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { NewPasswordForm } from './NewPasswordForm';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NewPasswordForm> = {
  component: NewPasswordForm,
  tags: ['autodocs'],
  title: 'organisms/NewPasswordForm',
  decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof NewPasswordForm>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to NewPasswordForm!/gi)).toBeTruthy();
  },
};
