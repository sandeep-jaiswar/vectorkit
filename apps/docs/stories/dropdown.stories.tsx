import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@vectorkit/ui";
import { ChevronDown, User, Settings, LogOut, Shield } from "lucide-react";

const meta: Meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;

export const Basic: StoryObj = {
  render: () => (
    <div style={{ padding: "4rem", display: "flex", justifyContent: "center" }}>
      <Dropdown>
        <DropdownTrigger>
          <Button color="primary" style={{ gap: "0.5rem" }} variant="solid">
            Profile <ChevronDown size={16} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => { /* noop */ }}>
            <User size={16} /> My Profile
          </DropdownItem>
          <DropdownItem onClick={() => { /* noop */ }}>
            <Settings size={16} /> Settings
          </DropdownItem>
          <DropdownItem disabled>
            <Shield size={16} /> Security (PRO)
          </DropdownItem>
          <div
            style={{
              height: "1px",
              backgroundColor: "var(--vk-surface-container-high)",
              margin: "0.25rem 0.5rem",
              opacity: 0.5,
            }}
          />
          <DropdownItem onClick={() => { /* noop */ }}>
            <LogOut size={16} /> Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ),
};

export const Ghost: StoryObj = {
  render: () => (
    <div style={{ padding: "4rem", display: "flex", justifyContent: "center" }}>
      <Dropdown>
        <DropdownTrigger>
          <Button color="neutral" style={{ gap: "0.5rem" }} variant="ghost">
            Options <Settings size={16} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu align="right">
          <DropdownItem>Edit Content</DropdownItem>
          <DropdownItem>View Analytics</DropdownItem>
          <DropdownItem>Share Gallery</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ),
};

export const Editorial: StoryObj = {
  render: () => (
    <div
      style={{
        padding: "4rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        backgroundColor: "var(--vk-surface-container-low)",
        borderRadius: "var(--vk-radius-xl)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontStyle: "italic", fontFamily: "var(--vk-font-family)" }}>Curated Selection</h2>
        <Dropdown>
          <DropdownTrigger>
            <Button color="neutral" shape="circle" style={{ width: "3.5rem", height: "3.5rem" }} variant="outlined">
              <ChevronDown size={20} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu align="right">
            <DropdownItem>LATEST EDITIONS</DropdownItem>
            <DropdownItem>ARCHIVE 2023</DropdownItem>
            <DropdownItem disabled>VINTAGE SERIES</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  ),
};
