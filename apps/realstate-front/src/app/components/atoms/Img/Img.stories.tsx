import type { Meta, StoryObj } from '@storybook/react';
import {Img} from './Img';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Img> = {
  component: Img,
  tags: ['autodocs'],
  title: 'Atoms/Img',
};
export default meta;
type Story = StoryObj<typeof Img>;

export const Default = {
  args: {
    src: 'https://source.unsplash.com/random/250x250/?nature',
    alt: 'placeholder',
    className: '',
  },
};

export const className = {
  args: {
    src: 'https://source.unsplash.com/random/250x250/?cars',
    alt: 'placeholder',
    className: 'rounded',
  },
};

export const alt = {
  args: {
    src: 'https://source.unsplash.com/random/250x250/?skyscrappers',
    alt: 'placeholder',
    className: '',
  },
};

export const Heading: Story = {
  args: {
    src: 'https://source.unsplash.com/random/250x250/?colors',
    alt: 'placeholder',
    className: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Img!/gi)).toBeTruthy();
  },
};
