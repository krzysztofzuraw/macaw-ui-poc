import { clsx } from "clsx";

import styles from "./Text.module.css";

type TextProps = {
  children?: React.ReactNode;
  variant?: "12/18" | "12/20" | "14/22" | "16/24" | "20/24";
  weight?: "370" | "420" | "460" | "560";
  as?: React.ElementType<any>;
  className?: string;
  color?: "black" | "neutral";
};

export const Text = ({
  children,
  variant = "14/22",
  weight = "420",
  color = "black",
  className,
  as: Component = "p"
}: TextProps) => {
  return (
    <Component
      className={clsx(styles.text, className)}
      data-variant={variant}
      data-weight={weight}
      data-color={color}
    >
      {children}
    </Component>
  );
};
