import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { BackButton } from './BackButton';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BackButton> = {
  component: BackButton,
  tags: ['autodocs'],
  title: 'Molecules/BackButton',
  decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BackButton!/gi)).toBeTruthy();
  },
};
