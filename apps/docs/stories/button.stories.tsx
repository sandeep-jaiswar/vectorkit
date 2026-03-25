import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@vectorkit/ui";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "neutral", "danger"],
    },
    variant: {
      control: "select",
      options: ["solid", "outlined", "ghost"],
    },
    shape: {
      control: "select",
      options: ["default", "square", "circle"],
    },
  },
  args: {
    children: "Button",
    color: "primary",
    variant: "solid",
    shape: "default",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button color="primary" variant="solid">
        Primary
      </Button>
      <Button color="secondary" variant="solid">
        Secondary
      </Button>
      <Button color="neutral" variant="solid">
        Neutral
      </Button>
      <Button color="danger" variant="solid">
        Danger
      </Button>
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button color="primary" variant="outlined">
        Primary
      </Button>
      <Button color="secondary" variant="outlined">
        Secondary
      </Button>
      <Button color="neutral" variant="outlined">
        Neutral
      </Button>
      <Button color="danger" variant="outlined">
        Danger
      </Button>
    </div>
  ),
};

export const Ghost: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button color="primary" variant="ghost">
        Primary
      </Button>
      <Button color="secondary" variant="ghost">
        Secondary
      </Button>
      <Button color="neutral" variant="ghost">
        Neutral
      </Button>
      <Button color="danger" variant="ghost">
        Danger
      </Button>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button shape="default">Default</Button>
      <Button shape="square">Square</Button>
      <Button shape="circle">Circle</Button>
    </div>
  ),
};
