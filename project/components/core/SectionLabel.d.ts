import * as React from "react";

export interface SectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Eyebrow colour. @default "crimson" */
  tone?: "crimson" | "gold" | "muted";
}

/** The Cinzel small-caps eyebrow that opens a section. */
export function SectionLabel(props: SectionLabelProps): React.ReactElement;
