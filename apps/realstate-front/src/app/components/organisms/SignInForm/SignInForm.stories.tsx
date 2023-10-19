import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { SignInForm } from './SignInForm';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'organisms/SignInForm',
  decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof SignInForm>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SignInForm!/gi)).toBeTruthy();
  },
};
