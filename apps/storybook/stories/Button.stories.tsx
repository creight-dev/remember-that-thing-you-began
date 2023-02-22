import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "@rttyb/ui";

const meta: Meta<ButtonProps> = {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "Button",
  },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {},
};
