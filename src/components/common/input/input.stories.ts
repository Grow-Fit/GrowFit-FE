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
    size: {
      control: "radio",
      options: ["w-full"],
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

export const WithLabel_Border: Story = {
  args: {
    variant: "withLabel",
    size: "w-full",
    shape: "border",
    label: "label O + 보더 O",
    disabled: false,
    placeholder: "입력해 주세요.",
  },
}

export const WithoutLabel_Border: Story = {
  args: {
    variant: "withoutLabel",
    size: "w-full",
    shape: "border",
    label: "label X + 보더 O",
    disabled: false,
    placeholder: "입력해 주세요.",
  },
}

export const WithLabel_NoBorder: Story = {
  args: {
    variant: "withLabel",
    size: "w-full",
    shape: "underline",
    label: "label O + 보더 X",
    disabled: false,
    placeholder: "입력해 주세요.",
  },
}

export const WithoutLabel_NoBorder: Story = {
  args: {
    variant: "withoutLabel",
    size: "w-full",
    shape: "underline",
    label: "label X + 보더 X",
    disabled: false,
    placeholder: "입력해 주세요.",
  },
}
