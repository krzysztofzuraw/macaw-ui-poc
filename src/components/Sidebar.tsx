import { clsx } from "clsx";

import { Text } from "./Text";
import { ReactComponent as Logo } from "../icons/sidebarIcon.svg";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={clsx("box", "stack", styles.sidebar)}>
      <ul className={clsx("stack", styles.list)}>
        <li className={clsx("stack")} data-direction="row">
          <Logo />
          <Text variant="14/22">Home</Text>
        </li>
        <li className={clsx("stack")} data-direction="row">
          <Logo />
          <Text variant="14/22">Catalog</Text>
        </li>
        <li className={clsx("stack")} data-direction="row">
          <Logo />
          <Text variant="14/22">Orders</Text>
        </li>
        <li className={clsx("stack")} data-direction="row">
          <Logo />
          <Text variant="14/22">Discounts</Text>
        </li>
        <li className={clsx("stack")} data-direction="row">
          <Logo />
          <Text variant="14/22">Storefront pages</Text>
        </li>
        <li className={clsx("stack")} data-direction="row">
          <Logo />
          <Text variant="14/22">Translations</Text>
        </li>
        <li className={clsx("stack")} data-direction="row">
          <Logo />
          <Text variant="14/22">Configuration</Text>
        </li>
        <li className={clsx("stack")} data-direction="row">
          <Logo />
          <Text variant="14/22">Marketplace</Text>
        </li>
      </ul>
    </aside>
  );
};
