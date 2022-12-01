import { clsx } from "clsx";

import { Text } from "./Text";
import { ReactComponent as Avatar } from "../icons/avatar.svg";

import styles from "./Header.module.css";

export const Header = () => (
  <header className={clsx("box", "stack", styles.header)} data-direction="row">
    <div className={clsx("box", "stack", styles.info)} data-direction="row">
      <Avatar />
      <div>
        <Text variant="12/18" weight="370">
          John’s Org
        </Text>
        <Text variant="16/24" weight="460">
          My store
        </Text>
      </div>
    </div>
    <Text as="h1" variant="20/24" weight="370">
      Short sleeve T-Shirt
    </Text>
  </header>
);
