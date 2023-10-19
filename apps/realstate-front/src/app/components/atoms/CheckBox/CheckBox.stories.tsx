import type { Meta, StoryObj } from '@storybook/react';
import {CheckBox} from './CheckBox';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Atoms/CheckBox',
};
export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default = {
  args: {
    fieldName: 'fieldName',
    checked: false,
    label: 'Welcome to CheckBox!',
    changeAction: () => true,
    additionalStyles: '',
    linkToModal: '',
    linkCTA: () => true, 
  },
};

export const checked = {
  args: {
    fieldName: 'fieldName',
    checked: true,
    label: 'Welcome to CheckBox!',
    changeAction: () => true,
    additionalStyles: '',
    linkToModal: '',
    linkCTA: () => true, 
  },
};

export const additionalStyles = {
  args: {
    fieldName: 'fieldName',
    checked: false,
    label: 'Welcome to CheckBox!',
    changeAction: () => true,
    additionalStyles: 'border-2 border-red-500',
    linkToModal: '',
    linkCTA: () => true, 
  },
};

export const linkCTA = {
  args: {
    fieldName: 'fieldName',
    checked: false,
    label: 'Welcome to CheckBox!',
    changeAction: () => true,
    additionalStyles: '',
    linkToModal: '',
    linkCTA: () => true, 
  },
};

export const changeAction = {
  args: {
    fieldName: 'fieldName',
    checked: false,
    label: 'Welcome to CheckBox!',
    changeAction: () => true,
    additionalStyles: '',
    linkToModal: '',
    linkCTA: () => true, 
  },
};

export const fieldName = {
  args: {
    fieldName: 'fieldName',
    checked: false,
    label: 'Welcome to CheckBox!',
    changeAction: () => true,
    additionalStyles: '',
    linkToModal: '',
    linkCTA: () => true, 
  },
};

export const disabled = {
  args: {
    fieldName: 'fieldName',
    checked: false,
    label: 'Welcome to CheckBox!',
    changeAction: () => true,
    additionalStyles: '',
    linkToModal: '',
    linkCTA: () => true, 
    disabled: true,
  },
};

export const Heading: Story = {
  args: {
    fieldName: 'fieldName',
    checked: false,
    label: 'Welcome to CheckBox!',
    changeAction: () => true,
    additionalStyles: '',
    linkToModal: '',
    linkCTA: () => true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CheckBox!/gi)).toBeTruthy();
  },
};
