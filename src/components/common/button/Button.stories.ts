import type { Meta, StoryObj } from "@storybook/react"
import { fn } from '@storybook/test';
import Button from "./Button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      option: "control",
      options: ["large", "medium"]
    },
    variant: {
      control: "radio",
      options: ["filled", "ghost"],
    },
    shape: {
      control: "radio",
      options: ["rounded", "sharp"],
    },
    label: {
      control: 'text',
    },
    disabled: {
      control: "boolean",
    },
    args: {
      onClick: fn(),
    },
  },
} satisfies Meta<typeof Button>;

export default meta
type Story = StoryObj<typeof Button>

export const FilledRounded: Story = {
  args: {
    size: "large",
    variant: "filled",
    shape: "rounded",
    label: "Filled + Rounded",
    disabled: false,
  },
};

export const GhostRounded: Story = {
  args: {
    size: "medium",
    variant: "ghost",
    shape: "rounded",
    label: "Ghost + Rounded",
    disabled: false,
  },
};

export const FilledSharp: Story = {
  args: {
    size: "medium",
    variant: "filled",
    shape: "sharp",
    label: "Filled + Sharp",
    disabled: false,
  },
};

export const Playground: Story = {
  args: {
    size: "small",
    variant: "filled",
    shape: "rounded",
    label: "Custom Button",
    disabled: false,
  },
};
