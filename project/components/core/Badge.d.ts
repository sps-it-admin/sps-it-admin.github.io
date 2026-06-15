import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour treatment. @default "navy" */
  tone?: "navy" | "crimson" | "gold" | "outline";
}

/** Small Cinzel pill for phase markers and short status tags. */
export function Badge(props: BadgeProps): React.ReactElement;
