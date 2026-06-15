import * as React from "react";

/**
 * Props for the brand's call-to-action button.
 *
 * @startingPoint section="Core" subtitle="Crimson CTA with offset gold outline" viewport="700x160"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "navy" | "ghost";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as a different element, e.g. "a". @default "button" */
  as?: "button" | "a";
  /** Optional icon node (e.g. a Lucide arrow). */
  icon?: React.ReactNode;
  /** Place icon after the label. @default true */
  iconRight?: boolean;
}

/** The brand's call-to-action button. */
export function Button(props: ButtonProps): React.ReactElement;
