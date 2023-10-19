import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ['autodocs'],
  title: 'organisms/Footer',
  decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    footerTitle: 'Footer Title',
    footerText: 'Footer Text',
    footerCta: 'Footer Cta',
    ctaDestination: '/destination',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Footer!/gi)).toBeTruthy();
  },
};
