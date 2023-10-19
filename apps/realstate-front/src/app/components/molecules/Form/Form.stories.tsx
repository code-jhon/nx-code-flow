import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { SignInForm } from '../../organisms/SignInForm/SignInForm';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Form> = {
  component: Form,
  tags: ['autodocs'],
  title: 'Molecules/Form',
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    children: "Welcome to Form!",
    onSubmit: () => {alert('clicked')},
    buttonLabel: 'Submit',
    isSubmitEnabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Form!/gi)).toBeTruthy();
  },
};

export const WithError = {
  args: {
    children: 'Welcome to Form!',
    onSubmit: () => {alert('clicked')},
    buttonLabel: 'Submit',
    isSubmitEnabled: false,
  },
};
