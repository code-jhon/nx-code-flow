import type { Meta, StoryObj } from '@storybook/react';
import {Link} from './Link';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Link> = {
  component: Link,
  tags: ['autodocs'],
  title: 'Atoms/Link',
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Paragraph = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'p',
  },
};

export const Heading: Story = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h1',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Link!/gi)).toBeTruthy();
  },
};

export const Heading2 = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h2',
  },
};

export const Heading3 = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h3',
  },
};

export const Heading4 = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h4',
  },
};

export const Heading5 = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h5',
  },
};

export const Heading6 = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h6',
  },
};

export const Span = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'span',
  },
};
