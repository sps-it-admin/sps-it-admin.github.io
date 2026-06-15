import * as React from "react";

export interface GoldDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Extra styles for the centred label. */
  labelStyle?: React.CSSProperties;
}

/** Centred label flanked by two thin gold rules — the motto ornament. */
export function GoldDivider(props: GoldDividerProps): React.ReactElement;
