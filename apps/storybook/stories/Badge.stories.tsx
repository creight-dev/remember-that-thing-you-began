import type { Meta, StoryObj } from "@storybook/react";
import { Badge, type BadgeBaseProps } from "@rttyb/ui";

const meta: Meta<BadgeBaseProps> = {
  title: "Atoms/Badge",
  component: Badge,
  args: {
    label: "link",
  },
};
export default meta;

type Story = StoryObj<BadgeBaseProps>;

export const Dashed = () => {
  return (
    <div style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}>
      <Badge label="link" colorScheme="neutral" />
      <Badge label="link" colorScheme="primary" />
      <Badge label="link" colorScheme="accent" />
      <Badge label="link" colorScheme="pink" />
      <Badge label="link" colorScheme="purple" />
      <Badge label="link" colorScheme="orange" />
      <Badge label="link" colorScheme="blue" />
      <Badge label="link" colorScheme="positive" />
      <Badge label="link" colorScheme="warning" />
      <Badge label="link" colorScheme="destructive" />
    </div>
  );
};

export const Solid = () => {
  return (
    <div style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}>
      <Badge label="link" style="solid" colorScheme="neutral" />
      <Badge label="link" style="solid" colorScheme="primary" />
      <Badge label="link" style="solid" colorScheme="accent" />
      <Badge label="link" style="solid" colorScheme="pink" />
      <Badge label="link" style="solid" colorScheme="purple" />
      <Badge label="link" style="solid" colorScheme="orange" />
      <Badge label="link" style="solid" colorScheme="blue" />
      <Badge label="link" style="solid" colorScheme="positive" />
      <Badge label="link" style="solid" colorScheme="warning" />
      <Badge label="link" style="solid" colorScheme="destructive" />
    </div>
  );
};
export const Hollow = () => {
  return (
    <div style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}>
      <Badge label="link" style="hollow" colorScheme="neutral" />
      <Badge label="link" style="hollow" colorScheme="primary" />
      <Badge label="link" style="hollow" colorScheme="accent" />
      <Badge label="link" style="hollow" colorScheme="pink" />
      <Badge label="link" style="hollow" colorScheme="purple" />
      <Badge label="link" style="hollow" colorScheme="orange" />
      <Badge label="link" style="hollow" colorScheme="blue" />
      <Badge label="link" style="hollow" colorScheme="positive" />
      <Badge label="link" style="hollow" colorScheme="warning" />
      <Badge label="link" style="hollow" colorScheme="destructive" />
    </div>
  );
};
