import { forwardRef } from "react";

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "full";
  }

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={className}
      {...props}
    />
  ),
);

Section.displayName = "Section";

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "full";
  }

const SectionHeader = forwardRef<HTMLElement, SectionHeaderProps>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={className}
      {...props}
    />
  ),
);

SectionHeader.displayName = "SectionHeader";

export interface SectionContentProps
  extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "full";
  }

const SectionContent = forwardRef<HTMLDivElement, SectionContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={className}
      {...props}
    />
  ),
);

SectionContent.displayName = "SectionContent";

const SectionFooter = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={className}
    {...props}
  />
));

SectionFooter.displayName = "SectionFooter";

export {
  Section,
  SectionHeader,
  SectionContent,
  SectionFooter
};
