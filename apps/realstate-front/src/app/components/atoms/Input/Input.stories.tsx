import type { Meta, StoryObj } from '@storybook/react';
import {Input} from './Input';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  title: 'Atoms/Input',
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default = {
  args: {
    placeholder: 'placeholder',
    type: 'text',
    fieldId: 'fieldId',
    className: '',
    state: 'default',
    setState: () => true,
    size: 'md',
    innerRef: null,  
  },
};

export const type_text = {
  args: {
    placeholder: 'placeholder',
    type: 'text',
    fieldId: 'fieldId',
    className: '',
    state: 'default',
    setState: () => true,
    size: 'md',
    innerRef: null,  
  },
};

export const type_password = {
  args: {
    placeholder: 'placeholder',
    type: 'password',
    fieldId: 'fieldId',
    className: '',
    state: 'default',
    setState: () => true,
    size: 'md',
    innerRef: null,  
  },
};

export const size_xs = {
  args: {
    placeholder: 'placeholder',
    type: 'text',
    fieldId: 'fieldId',
    className: '',
    state: 'default',
    setState: () => true,
    size: 'xs',
    innerRef: null,  
  },
};

export const size_sm = {
  args: {
    placeholder: 'placeholder',
    type: 'text',
    fieldId: 'fieldId',
    className: '',
    state: 'default',
    setState: () => true,
    size: 'sm',
    innerRef: null,  
  },
};

export const size_md = {
  args: {
    placeholder: 'placeholder',
    type: 'text',
    fieldId: 'fieldId',
    className: '',
    state: 'default',
    setState: () => true,
    size: 'md',
    innerRef: null,  
  },
};

export const size_lg = {
  args: {
    placeholder: 'placeholder',
    type: 'text',
    fieldId: 'fieldId',
    className: '',
    state: 'default',
    setState: () => true,
    size: 'lg',
    innerRef: null,  
  },
};

export const size_xl = {
  args: {
    placeholder: 'placeholder',
    type: 'text',
    fieldId: 'fieldId',
    className: '',
    state: 'default',
    setState: () => true,
    size: 'xl',
    innerRef: null,  
  },
};

export const className = {
  args: {
    placeholder: 'placeholder',
    type: 'text',
    fieldId: 'fieldId',
    className: 'rounded',
    state: 'default',
    setState: () => true,
    size: 'md',
    innerRef: null,  
  },
};

export const state_default = {
  args: {
    placeholder: 'placeholder',
    type: 'text',
    fieldId: 'fieldId',
    className: '',
    state: 'default',
    setState: () => true,
    size: 'md',
    innerRef: null,  
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Input!/gi)).toBeTruthy();
  },
};
