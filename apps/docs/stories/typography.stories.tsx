import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@vectorkit/ui";

const meta = {
  title: "UI/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Aa",
    color: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["headline", "body", "label"],
    },
    size: {
      control: "select",
      options: ["lg", "md", "sm"],
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "neutral",
        "danger",
        "muted",
      ],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "headline",
    size: "lg",
  },
};

export const HeadlineGallery: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Typography size="lg" variant="headline">
        Headline LG
      </Typography>
    </div>
  ),
};

export const BodyGallery: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography size="lg" variant="body">
        Body LG
      </Typography>
    </div>
  ),
};

export const LabelGallery: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography size="md" variant="label">
        Label MD
      </Typography>
      <Typography size="sm" variant="label">
        Label SM
      </Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        background: "#f9f9fb",
      }}
    >
      <Typography color="primary" size="lg" variant="headline">
        Primary
      </Typography>
      <Typography color="secondary" size="lg" variant="headline">
        Secondary
      </Typography>
      <Typography color="danger" size="lg" variant="headline">
        Danger
      </Typography>
      <Typography color="muted" size="lg" variant="headline">
        Muted
      </Typography>
    </div>
  ),
};
