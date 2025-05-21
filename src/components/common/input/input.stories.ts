import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import Input from "./input"

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["withLabel", "withoutLabel"],
    },
    shape: {
      control: "radio",
      options: ["border", "underline"],
    },
    label: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const FilledRounded: Story = {
  args: {
    variant: "withLabel",
    shape: "border",
    label: "label O + 보더 O",
    disabled: false,
  },
}

export const GhostRounded: Story = {
  args: {
    variant: "withoutLabel",
    shape: "border",
    label: "label X + 보더 O",
    disabled: false,
  },
}

export const FilledSharp: Story = {
  args: {
    variant: "withLabel",
    shape: "underline",
    label: "label O + 보더 X",
    disabled: false,
  },
}

export const Playground: Story = {
  args: {
    variant: "withoutLabel",
    shape: "underline",
    label: "label X + 보더 X",
    disabled: false,
  },
}
