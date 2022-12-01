import { clsx } from "clsx";

import { Text } from "./Text";
import { Button } from "./Button";

import styles from "./OtherSection.module.css";

export const OtherSection = () => {
  return (
    <article className={clsx("stack", styles.wrapper)}>
      <Text variant="16/24" weight="460" as="header">
        Other
      </Text>

      <section className={clsx("card", "box", "stack")}>
        <div className={clsx("stack", "box", styles.section)} data-direction="row">
          <div>
            <Text variant="14/22" weight="420">
              Search engine preview
            </Text>
            <Text variant="12/18" weight="370">
              Add search engine title and description to make this product easier to find
            </Text>
          </div>

          <Button className={clsx(styles.button)}>
            <Text variant="14/22" weight="560">
              Edit website SEO
            </Text>
          </Button>
        </div>

        <div className={clsx("stack", "box", styles.section)} data-direction="row">
          <div>
            <Text variant="14/22" weight="420">
              Metadata
            </Text>
            <Text variant="12/18" weight="370">
              2 Strings
            </Text>
          </div>

          <Button className={clsx(styles.button)}>
            <Text variant="14/22" weight="560">
              Add field
            </Text>
          </Button>
        </div>

        <div className={clsx("stack", "box", styles.privateMetadata)} data-direction="row">
          <div>
            <Text variant="14/22" weight="420">
              Private metadata
            </Text>
            <Text variant="12/18" weight="370">
              No metadata created for this element. Use the button below to add new metadata field.
            </Text>
          </div>

          <Button className={clsx(styles.button)}>
            <Text variant="14/22" weight="560">
              Add field
            </Text>
          </Button>
        </div>
      </section>
    </article>
  );
};
