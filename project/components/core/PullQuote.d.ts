import * as React from "react";

export interface PullQuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  /** Optional attribution line, set in Cinzel. */
  cite?: React.ReactNode;
  /** Ground it sits on. @default "light" */
  tone?: "light" | "dark";
}

/** Italic Playfair quotation with a crimson left-rule. */
export function PullQuote(props: PullQuoteProps): React.ReactElement;
