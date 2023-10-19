import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FormField> = {
  component: FormField,
  tags: ['autodocs'],
  title: 'Molecules/FormField',
};
export default meta;
type Story = StoryObj<typeof FormField>;

export const Default = {
  args: {
    label: 'Email',
    fieldName: 'email',
    placeholder: 'Enter your email',
    type: 'text',
    state: 'jhon@doe.com',
    changeAction: () => void 0,
    additionalStyles: '',
    hideForgotPassword: false,
    hideLabel: false,
    innerRef: () => void 0,
    onBlur: () => void 0,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    fieldName: 'password',
    placeholder: 'Enter your password',
    type: 'password',
    state: 'thisisapassword',
    changeAction: () => void 0,
    additionalStyles: '',
    hideForgotPassword: true,
    hideLabel: true,
    onBlur: () => void 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FormField!/gi)).toBeTruthy();
  },
};
