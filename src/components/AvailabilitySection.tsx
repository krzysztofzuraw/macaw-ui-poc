import { clsx } from "clsx";

import { Text } from "./Text";
import { Button } from "./Button";

import styles from "./AvailabilitySection.module.css";

export const AvailabilitySection = () => {
  return (
    <article>
      <section className={clsx("stack", "box", styles.header)} data-direction="row">
        <div>
          <Text as="header" variant="16/24" weight="460">
            Availability
          </Text>
          <Text variant="12/18" weight="370">
            2 / 3 channels assigned
          </Text>
        </div>

        <Button>
          <Text as="span" variant="14/22" weight="560">
            Manage
          </Text>
        </Button>
      </section>

      <div className={clsx("card", "box")}>
        <section className={clsx("stack")}>
          <Text as="header" variant="14/22" weight="370">
            Channel USD
          </Text>
          <Text variant="12/20" color="neutral">
            Published • Available for purchase
          </Text>
          <div className={clsx("box", "stack", styles.details)}>
            <Text variant="12/20" color="neutral">
              Visibility
            </Text>
            <div className={clsx("stack")} data-direction="row">
              <div className={clsx(styles.active, "box")}>
                <Text variant="14/22" weight="460">
                  Published
                </Text>
              </div>
              <div className={clsx("box")}>
                <Text variant="14/22" weight="460">
                  Not Published
                </Text>
              </div>
            </div>
            <Text variant="12/20" color="neutral">
              Purchase availability
            </Text>
            <div className={clsx("stack")} data-direction="row">
              <div className={clsx(styles.active, "box")}>
                <Text variant="14/22" weight="460">
                  Available
                </Text>
              </div>

              <div className={clsx("box")}>
                <Text variant="14/22" weight="460">
                  Unavailable
                </Text>
              </div>
            </div>
            <form className={clsx("box", styles.form)}>
              <input type="checkbox" name="hideProduct" id="hideProduct" />
              <label htmlFor="hideProduct">
                <Text as="span" variant="14/22" weight="460">
                  Hide in product listing
                </Text>
              </label>
              <Text variant="12/18" weight="370" color="neutral">
                Hide in product listing Enabling this checkbox will remove product from search and
                category pages. It will be available on collection pages.
              </Text>
            </form>
          </div>
        </section>

        <section className={clsx("stack", "box", styles.channel)}>
          <Text as="header" variant="14/22" weight="370">
            Channel EUR
          </Text>
          <Text variant="12/20" color="neutral">
            Published • Available for purchase
          </Text>
        </section>
      </div>
    </article>
  );
};
