import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import {Link} from './Link';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Link> = {
  component: Link,
  tags: ['autodocs'],
  title: 'Atoms/Link',
  decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Paragraph = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'p',
    isSB: true,
  },
};

export const Heading: Story = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h1',
    isSB: true,
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
    isSB: true,
  },
};

export const Heading3 = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h3',
    isSB: true,
  },
};

export const Heading4 = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h4',
    isSB: true,
  },
};

export const Heading5 = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h5',
    isSB: true,
  },
};

export const Heading6 = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'h6',
    isSB: true,
  },
};

export const Span = {
  args: {
    children: 'Welcome to Link!',
    to: '/',
    textType: 'span',
    isSB: true,
  },
};
