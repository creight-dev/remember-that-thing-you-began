interface CardProps {
    title: string;
    cta: string;
    href: string;
}

declare const Card: ({ title, cta, href }: CardProps) => JSX.Element;

export { CardProps as C, Card as a };
