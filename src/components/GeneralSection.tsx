import { clsx } from "clsx";

import { Text } from "./Text";

import styles from "./GeneralSection.module.css";

export const GeneralSection = () => {
  return (
    <article>
      <Text as="header" variant="16/24" weight="460" className={clsx("box", styles.header)}>
        General
      </Text>
      <section className={clsx("box", "card")}>
        <div className={clsx("stack", "box", styles.section)}>
          <Text variant="12/20" color="neutral">
            Name
          </Text>
          <Text variant="14/22" weight="460">
            Short sleeve T-Shirt
          </Text>
        </div>

        <div className={clsx("stack", "box", styles.section)}>
          <Text variant="12/20" color="neutral">
            Description
          </Text>
          <Text variant="14/22" weight="460">
            Sapien parturient in fringilla ac facilisis nunc adipiscing viverra. Non semper rutrum
            augue sed leo felis pretium sed. Eget nulla iaculis neque eu. Nam mauris velit dui nunc
            euismod dolor. Massa mi id massa faucibus dui pellentesque elementum. Ac dignissim nunc
            gravida a. Massa vestibulum lacus netus imperdiet adipiscing sit aenean nisl. Tincidunt
            quisque in in donec dignissim eget massa eget in. Ut faucibus tortor suspendisse odio
            amet velit. Erat purus proin arcu congue vitae et semper velit ut. Cursus diam mauris
            mauris nunc elementum.
          </Text>
        </div>

        <div className={clsx("stack", "box", styles.section, styles.category)} data-direction="row">
          <div>
            <Text variant="12/20" color="neutral">
              Category
            </Text>
            <Text variant="14/22">Short sleeve T-Shirt</Text>
          </div>
          <Text variant="14/22" color="neutral">
            Product rating
          </Text>
        </div>

        <div className={clsx("stack", "box", styles.collections)}>
          <Text variant="12/20" color="neutral">
            Collections
          </Text>
        </div>
      </section>
    </article>
  );
};
