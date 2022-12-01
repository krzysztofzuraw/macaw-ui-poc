import { clsx } from "clsx";

import { Text } from "./Text";

import styles from "./VariantsSection.module.css";

export const VariantsSection = () => {
  return (
    <article className={clsx(styles.wrapper)}>
      <Text variant="16/24" weight="460">
        Variants
      </Text>
    </article>
  );
};
