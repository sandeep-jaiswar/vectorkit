import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Typography, Input } from "@vectorkit/ui";
import {
  Search,
  Home,
  User,
  Pencil,
  Wand2,
  Shapes,
  Tag,
  Trash2,
} from "lucide-react";

const meta: Meta = {
  title: "Design System/Dashboard",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

function ColorScale({
  label,
  color,
  hex,
}: {
  label: string;
  color: string;
  hex: string;
}): JSX.Element {
  return (
    <div
      style={{
        backgroundColor: "var(--vk-surface-container-lowest)",
        borderRadius: "var(--vk-radius-md)",
        padding: "1.5rem",
        boxShadow: "var(--vk-shadow-ambient)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography size="sm" style={{ fontWeight: 700 }} variant="label">
          {label}
        </Typography>
        <Typography size="sm" style={{ opacity: 0.6 }} variant="label">
          {hex}
        </Typography>
      </div>
      <div
        style={{
          height: "100px",
          backgroundColor: color,
          borderRadius: "var(--vk-radius-md)",
        }}
      />
      <div style={{ display: "flex", gap: "2px", height: "40px" }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          let borderRadius = "0";
          if (i === 0) borderRadius = "4px 0 0 4px";
          if (i === 9) borderRadius = "0 4px 4px 0";

          return (
            <div
              key={i}
              style={{
                borderRadius,
                backgroundColor: color,
                flex: 1,
                opacity: 1 - i * 0.1,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function SectionCard({
  children,
  label,
  height,
}: {
  children: React.ReactNode;
  label?: string;
  height?: string;
}): JSX.Element {
  return (
    <div
      style={{
        backgroundColor: "var(--vk-surface-container-low)",
        borderRadius: "var(--vk-radius-xl)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        height: height || "auto",
        position: "relative",
      }}
    >
      {label ? (
        <Typography
          size="sm"
          style={{
            opacity: 0.4,
            position: "absolute",
            top: "1.5rem",
            left: "2rem",
          }}
          variant="label"
        >
          {label}
        </Typography>
      ) : null}
      <div style={{ marginTop: label ? "1.5rem" : 0 }}>{children}</div>
    </div>
  );
}

export const Dashboard: StoryObj = {
  render: () => (
    <div
      className="vk-base-surface"
      style={{
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1.5fr 1.5fr",
        gap: "1.5rem",
      }}
    >
      {/* Column 1: Color Scales */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <ColorScale color="#007AFF" hex="#007AFF" label="Primary" />
        <ColorScale color="#1D1D1F" hex="#1D1D1F" label="Secondary" />
        <ColorScale color="#000000" hex="#000000" label="Tertiary" />
        <ColorScale color="#F5F5F7" hex="#F5F5F7" label="Neutral" />
      </div>

      {/* Column 2: Typography */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <SectionCard height="280px" label="Headline">
          <Typography
            size="lg"
            style={{
              fontSize: "8rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
            variant="headline"
          >
            Aa
          </Typography>
        </SectionCard>
        <SectionCard height="280px" label="Body">
          <Typography
            size="lg"
            style={{
              fontSize: "6rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              opacity: 0.8,
            }}
            variant="body"
          >
            Aa
          </Typography>
        </SectionCard>
        <SectionCard height="280px" label="Label">
          <Typography
            size="md"
            style={{
              fontSize: "6rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              opacity: 0.6,
            }}
            variant="label"
          >
            Aa
          </Typography>
        </SectionCard>
      </div>

      {/* Column 3: Buttons & Interactions */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <SectionCard>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
            }}
          >
            <Button color="primary" variant="solid">
              Primary
            </Button>
            <Button color="neutral" variant="solid">
              Secondary
            </Button>
            <Button color="secondary" variant="solid">
              Inverted
            </Button>
            <Button color="neutral" variant="outlined">
              Outlined
            </Button>
          </div>
        </SectionCard>

        <SectionCard>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem 0",
            }}
          >
            <div
              style={{
                height: "4px",
                width: "80%",
                backgroundColor: "var(--vk-primary)",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                height: "4px",
                width: "100%",
                backgroundColor: "var(--vk-secondary)",
                borderRadius: "2px",
                opacity: 0.8,
              }}
            />
            <div
              style={{
                height: "4px",
                width: "60%",
                backgroundColor: "var(--vk-secondary)",
                borderRadius: "2px",
                opacity: 0.6,
              }}
            />
          </div>
        </SectionCard>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "1.5rem",
          }}
        >
          <SectionCard>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button color="secondary" shape="square" variant="solid">
                <Pencil size={20} />
              </Button>
            </div>
          </SectionCard>
          <SectionCard>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button color="primary" style={{ gap: "0.5rem" }} variant="solid">
                <Pencil size={18} />
                Label
              </Button>
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Column 4: Search & Navigation */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <SectionCard>
          <div style={{ position: "relative" }}>
            <Search
              size={18}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                opacity: 0.4,
              }}
            />
            <Input placeholder="Search" style={{ paddingLeft: "2.5rem" }} />
          </div>
        </SectionCard>

        <SectionCard>
          <div
            style={{
              backgroundColor: "var(--vk-surface-container-highest)",
              borderRadius: "50px",
              padding: "0.5rem",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              opacity: 0.8,
            }}
          >
            <Button color="primary" shape="circle" variant="solid">
              <Home size={18} />
            </Button>
            <Search size={18} style={{ opacity: 0.6 }} />
            <User size={18} style={{ opacity: 0.6 }} />
          </div>
        </SectionCard>

        <SectionCard>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            <Button color="primary" shape="circle" variant="solid">
              <Wand2 size={18} />
            </Button>
            <Button color="secondary" shape="circle" variant="solid">
              <Shapes size={18} />
            </Button>
            <Button color="secondary" shape="circle" variant="solid">
              <Tag size={18} />
            </Button>
            <Button color="danger" shape="circle" variant="solid">
              <Trash2 size={18} />
            </Button>
          </div>
        </SectionCard>
      </div>
    </div>
  ),
};
