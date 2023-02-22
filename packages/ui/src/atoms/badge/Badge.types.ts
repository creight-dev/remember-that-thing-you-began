export type BadgeBaseProps = {
  label: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  style?: "solid" | "ghost" | "hollow";
  colorScheme?: ColorSchemes;
};

export type ColorSchemes =
  | "neutral"
  | "primary"
  | "accent"
  | "pink"
  | "purple"
  | "orange"
  | "blue"
  | "positive"
  | "warning"
  | "destructive";
