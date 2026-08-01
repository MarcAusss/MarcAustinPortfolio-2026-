"use client";

import Link from "next/link";
import type { Route } from "next";

import type { MouseEvent, ReactNode } from "react";

import {
  type PortfolioRoute,
  usePortfolioTransition,
} from "./PortfolioTransitionProvider";

type PortfolioSwitchLinkProps = {
  href: PortfolioRoute;

  children: ReactNode;

  className?: string;

  onClick?: () => void;

  ariaLabel?: string;
};

export default function PortfolioSwitchLink({
  href,
  children,
  className = "",
  onClick,
  ariaLabel,
}: PortfolioSwitchLinkProps) {
  const { startPortfolioTransition, isTransitioning } =
    usePortfolioTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    /*
    |--------------------------------------------------------------------------
    | Preserve special browser link behavior
    |--------------------------------------------------------------------------
    */

    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();

    if (isTransitioning) {
      return;
    }

    onClick?.();

    /*
     * href already has type PortfolioRoute.
     *
     * Do NOT use href.toString().
     */

    startPortfolioTransition(href);
  };

  return (
    <Link
      href={href as Route}
      prefetch
      aria-label={ariaLabel}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
