import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Input, Card, CardGroup, HeroTray } from "@vectorkit/ui";

const meta: Meta = {
  title: "Editorial/Gallery",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Showcase: StoryObj = {
  render: () => (
    <div
      className="vk-base-surface"
      style={{ padding: "0", position: "relative", overflowX: "hidden" }}
    >
      {/* Header section with asymmetry */}
      <header
        style={{
          display: "flex",
          minHeight: "80vh",
          padding: "var(--vk-spacing-12)",
        }}
      >
        <div style={{ flex: "0 0 30%", paddingTop: "var(--vk-spacing-10)" }}>
          <p className="vk-label-sm" style={{ marginBottom: "1rem" }}>
            No. 001
          </p>
          <h1 className="vk-display-lg">
            Digital
            <br />
            Curator
          </h1>
        </div>

        {/* Asymmetrical offset image/empty-space container */}
        <div
          style={{
            flex: "0 0 60%",
            marginLeft: "auto",
            backgroundColor: "var(--vk-surface-container-high)",
            borderRadius: "var(--vk-radius-xl)",
            minHeight: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            className="vk-label-md"
            style={{ color: "var(--vk-outline-variant)" }}
          >
            [ Editorial Image Area ]
          </p>
        </div>
      </header>

      <main
        style={{
          padding: "var(--vk-spacing-12)",
          maxWidth: "1400px",
          margin: "0 auto",
          minHeight: "120vh",
        }}
      >
        <div style={{ paddingBottom: "var(--vk-spacing-12)" }}>
          <p
            className="vk-body-lg"
            style={{ maxWidth: "600px", marginLeft: "30%" }}
          >
            Moving beyond standard minimalist templates, this system treats the
            interface as a high-end editorial gallery. It is characterized by an
            uncompromising commitment to whitespace, sophisticated monochrome
            depth, and a "vibe-first" structural philosophy.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "var(--vk-spacing-12)",
            marginTop: "8rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              className="vk-label-md"
              style={{ marginBottom: "var(--vk-spacing-10)" }}
            >
              Interactions
            </h2>
            <CardGroup>
              <Card>
                <p className="vk-label-sm" style={{ marginBottom: "0.5rem" }}>
                  Primary Action
                </p>
                <Input placeholder="Enter your email" wrapperClassName="mb-4" />
                <Button
                  variant="primary"
                  style={{ marginTop: "1rem", width: "100%" }}
                >
                  Subscribe
                </Button>
              </Card>
              <Card>
                <p className="vk-label-sm" style={{ marginBottom: "0.5rem" }}>
                  Secondary Action
                </p>
                <Button variant="secondary">View Collection</Button>
                <p className="vk-body-lg" style={{ marginTop: "1rem" }}>
                  The strict "No-Line" rule creates a molded look, utilizing
                  background color shifts over borders.
                </p>
              </Card>
            </CardGroup>
          </div>

          <div style={{ flex: 1, paddingTop: "10rem" }}>
            <h2
              className="vk-label-md"
              style={{ marginBottom: "var(--vk-spacing-10)" }}
            >
              Typography
            </h2>
            <Card>
              <h3
                className="vk-display-lg"
                style={{ marginBottom: "1rem", fontSize: "2.5rem" }}
              >
                Restraint as Power
              </h3>
              <p className="vk-body-lg" style={{ marginBottom: "2rem" }}>
                Every pixel intentional. Every empty space deliberate.
              </p>
              <Button variant="tertiary">Read Manifesto</Button>
            </Card>
          </div>
        </div>
      </main>

      <HeroTray>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p className="vk-label-sm">Now Playing</p>
            <p className="vk-body-lg" style={{ fontWeight: 600 }}>
              The Art of Subtraction
            </p>
          </div>
          <Button variant="secondary">Discover</Button>
        </div>
      </HeroTray>
    </div>
  ),
};
