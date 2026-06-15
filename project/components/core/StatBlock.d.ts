import * as React from "react";

export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "1999". */
  value: React.ReactNode;
  /** The Cinzel label beneath it, e.g. "Founded". */
  label: string;
  /** Ground it sits on. @default "light" */
  tone?: "light" | "dark";
}

/** A figure with a gold left-rule and Cinzel label. */
export function StatBlock(props: StatBlockProps): React.ReactElement;
