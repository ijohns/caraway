import { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "full";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={className}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "full";
}
const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  ),
);

CardImage.displayName = "CardImage";

export interface CardContentProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "full";
  }

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={className}
      {...props}
    />
  ),
);

CardContent.displayName = "CardFooter";


export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "default" | "full";
  }

const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={className}
      {...props}
    />
  ),
);

CardTitle.displayName = "CardTitle";

export interface CardSubTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "default" | "full";
  }

const CardSubTitle = forwardRef<HTMLParagraphElement, CardSubTitleProps>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={className}
      {...props}
    />
  ),
);

CardSubTitle.displayName = "CardSubTitle";

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "full";
  }

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={className}
      {...props}
    />
  ),
);

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardImage,
  CardContent,
  CardFooter,
  CardTitle,
  CardSubTitle,
};
