import { clsx } from "clsx";

import { Text } from "./Text";
import { Button } from "./Button";

import styles from "./ProductDetailsSection.module.css";

export const ProductDetailsSection = () => {
  return (
    <article className={clsx("stack", styles.wrapper)}>
      <Text as="header" variant="16/24" weight="460">
        Product details
      </Text>
      <section className={clsx("card", "box", "stack")}>
        <div className={clsx("stack", "box", styles.section)} data-direction="row">
          <div>
            <Text variant="12/20" weight="460" color="neutral">
              Product type
            </Text>
            <Text variant="14/22" weight="460">
              Short sleeve T-Shirt
            </Text>
          </div>
          <div className={clsx("stack", styles.editType)} data-direction="row">
            <Text variant="14/22" weight="560">
              Edit type
            </Text>
            <Button>
              <Text variant="14/22" weight="560">
                Add attribute
              </Text>
            </Button>
          </div>
        </div>

        <div className={clsx("stack", "box", styles.section)} data-direction="row">
          <Text color="neutral" variant="14/22" weight="370">
            Material
          </Text>
          <Button>
            <Text>Cotton</Text>
          </Button>
        </div>

        <div className={clsx("stack", "box", styles.section)} data-direction="row">
          <Text color="neutral" variant="14/22" weight="370">
            Buttoned
          </Text>
          <input type="checkbox" name="buttoned" id="buttoned" />
        </div>

        <div className={clsx("stack", "box", styles.sleeve)} data-direction="row">
          <Text color="neutral" variant="14/22" weight="370">
            Sleeve
          </Text>
          <Button>
            <Text>Short</Text>
          </Button>
        </div>
      </section>
    </article>
  );
};
