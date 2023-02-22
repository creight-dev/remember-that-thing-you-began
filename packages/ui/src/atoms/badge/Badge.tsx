import * as React from "react";
import type { BadgeBaseProps, ColorSchemes } from "./Badge.types";
import { cva } from "class-variance-authority";

const baseStyles = "ui-inline-flex ui-items-center ui-rounded-full ui-px-3 ui-py-0.5 ui-text-sm ui-font-medium ";
const badgeStyles = cva(baseStyles, {
  variants: {
    style: {
      solid: ["ui-border"],
      ghost: ["ui-border ui-border-dashed"],
      hollow: ["ui-border bg-transparent"],
    },
    colorScheme: {
      neutral: ["ui-border-neutral-8"],
      primary: ["ui-border-primary-8"],
      accent: ["ui-border-accent-8"],
      pink: ["ui-border-pink-8"],
      purple: ["ui-border-purple-8"],
      orange: ["ui-border-orange-8"],
      blue: ["ui-border-blue-8"],
      positive: ["ui-border-positive-8"],
      warning: ["ui-border-warning-8"],
      destructive: ["ui-border-destructive-8"],
    },
  },
  compoundVariants: [
    {
      style: "ghost",
      colorScheme: "neutral",
      className: ["ui-bg-neutral-8/30 ui-text-neutral-12"],
    },
    {
      style: "ghost",
      colorScheme: "primary",
      className: ["ui-bg-primary-8/30 ui-text-primary-12"],
    },
    {
      style: "ghost",
      colorScheme: "accent",
      className: ["ui-bg-accent-8/30 ui-text-accent-12"],
    },
    {
      style: "ghost",
      colorScheme: "pink",
      className: ["ui-bg-pink-8/30 ui-text-pink-12"],
    },
    {
      style: "ghost",
      colorScheme: "purple",
      className: ["ui-bg-purple-8/30 ui-text-purple-12"],
    },
    {
      style: "ghost",
      colorScheme: "orange",
      className: ["ui-bg-orange-8/30 ui-text-orange-12"],
    },
    {
      style: "ghost",
      colorScheme: "blue",
      className: ["ui-bg-blue-8/30 ui-text-blue-12"],
    },
    {
      style: "ghost",
      colorScheme: "positive",
      className: ["ui-bg-positive-8/30 ui-text-positive-12"],
    },
    {
      style: "ghost",
      colorScheme: "warning",
      className: ["ui-bg-warning-8/30 ui-text-warning-12"],
    },
    {
      style: "ghost",
      colorScheme: "destructive",
      className: ["ui-bg-destructive-8/30 ui-text-destructive-12"],
    },
    {
      style: "solid",
      colorScheme: "neutral",
      className: ["ui-bg-neutral-9/75 ui-text-neutral-12"],
    },
    {
      style: "solid",
      colorScheme: "primary",
      className: ["ui-bg-primary-9/75 ui-text-primary-2"],
    },
    {
      style: "solid",
      colorScheme: "accent",
      className: ["ui-bg-accent-9/75 ui-text-accent-12"],
    },
    {
      style: "solid",
      colorScheme: "pink",
      className: ["ui-bg-pink-9/75 ui-text-pink-12"],
    },
    {
      style: "solid",
      colorScheme: "purple",
      className: ["ui-bg-purple-9/75 ui-text-purple-12"],
    },
    {
      style: "solid",
      colorScheme: "orange",
      className: ["ui-bg-orange-9/75 ui-text-orange-12"],
    },
    {
      style: "solid",
      colorScheme: "blue",
      className: ["ui-bg-blue-9/75 ui-text-blue-12"],
    },
    {
      style: "solid",
      colorScheme: "positive",
      className: ["ui-bg-positive-9/75 ui-text-positive-2"],
    },
    {
      style: "solid",
      colorScheme: "warning",
      className: ["ui-bg-warning-9/75 ui-text-warning-2"],
    },
    {
      style: "solid",
      colorScheme: "destructive",
      className: ["ui-bg-destructive-9/75 ui-text-destructive-12"],
    },
    {
      style: "ghost",
      colorScheme: "destructive",
      className: ["ui-bg-destructive-8/30 ui-text-destructive-12"],
    },
    {
      style: "hollow",
      colorScheme: "neutral",
      className: ["ui-text-neutral-8"],
    },
    {
      style: "hollow",
      colorScheme: "primary",
      className: ["ui-text-primary-8"],
    },
    {
      style: "hollow",
      colorScheme: "accent",
      className: ["ui-text-accent-8"],
    },
    {
      style: "hollow",
      colorScheme: "pink",
      className: ["ui-text-pink-8"],
    },
    {
      style: "hollow",
      colorScheme: "purple",
      className: ["ui-text-purple-8"],
    },
    {
      style: "hollow",
      colorScheme: "orange",
      className: ["ui-text-orange-8"],
    },
    {
      style: "hollow",
      colorScheme: "blue",
      className: ["ui-text-blue-8"],
    },
    {
      style: "hollow",
      colorScheme: "positive",
      className: ["ui-text-positive-8"],
    },
    {
      style: "hollow",
      colorScheme: "warning",
      className: ["ui-text-warning-8"],
    },
    {
      style: "hollow",
      colorScheme: "destructive",
      className: ["ui-text-destructive-9"],
    },
  ],
  defaultVariants: {
    style: "ghost",
    colorScheme: "neutral",
  },
});
export const Badge = ({ label, style, colorScheme }: BadgeBaseProps) => {
  return <span className={badgeStyles({ style, colorScheme })}>{label}</span>;
};
