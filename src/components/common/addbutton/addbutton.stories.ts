import type { Meta, StoryObj } from "@storybook/react"
import { fn } from '@storybook/test';
import AddButton from "./addbutton";

const meta = {
  title: "Components/ButtonAdd",
  component: AddButton,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    label: {
      label: "text"
    },
    args: {
      onClick: fn(),
    },
  },
} satisfies Meta<typeof AddButton>;

export default meta
type Story = StoryObj<typeof AddButton>

export const Addable: Story = {
  args: {
    disabled: false,
    label: "추가 가능한 상태"
  },
};

export const Added: Story = {
  args: {
    disabled: true,
    label: "이미 추가된 상태"
  },
};