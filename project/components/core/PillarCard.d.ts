import * as React from "react";

/**
 * Props for the white bordered feature card — the "Four Pillars" card.
 *
 * @startingPoint section="Core" subtitle="Bordered feature card that lifts on hover" viewport="700x260"
 */
export interface PillarCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon node (e.g. a Lucide glyph), rendered in crimson. */
  icon?: React.ReactNode;
  /** Card title, set in Playfair. */
  title: string;
}

/** White bordered feature card with crimson icon — the "Four Pillars" card. */
export function PillarCard(props: PillarCardProps): React.ReactElement;
