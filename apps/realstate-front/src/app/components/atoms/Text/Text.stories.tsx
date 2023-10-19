import type { Meta, StoryObj } from '@storybook/react';
import {Text} from './Text';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ['autodocs'],
  title: 'Atoms/Text',
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Heading = {
  args: {
    className: "",
    textType: 'h1',
    children: 'Welcome to Text!',
  },
};

export const Heading2: Story = {
  args: {
    className: "",
    textType: 'h2',
    children: 'Welcome to Text!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Text!/gi)).toBeTruthy();
  },
};

export const Heading3 = {
  args: {
    className: "",
    textType: 'h3',
    children: 'Welcome to Text!',
  },
};

export const Heading4 = {
  args: {
    className: "",
    textType: 'h4',
    children: 'Welcome to Text!',
  },
};

export const Heading5 = {
  args: {
    className: "",
    textType: 'h5',
    children: 'Welcome to Text!',
  },
};

export const Heading6 = {
  args: {
    className: "",
    textType: 'h6',
    children: 'Welcome to Text!',
  },
};

export const Paragraph = {
  args: {
    className: "",
    textType: 'p',
    children: 'Welcome to Text!',
  },
};

export const Span = {
  args: {
    className: "",
    textType: 'span',
    children: 'Welcome to Text!',
  },
};

export const AdditionalStyles = {
  args: {
    className: "text-red-500",
    textType: 'h1',
    children: 'Welcome to Text!',
  },
};
