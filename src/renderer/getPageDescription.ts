export { getPageDescription };

import type { PageContext } from "vike/types";

function getPageDescription(pageContext: PageContext): string {
  const description =
    // Title defined dynamically by data()
    pageContext.description ||
    // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js)
    // The setting 'pageContext.config.title' is a custom setting we defined at ./+config.ts
    pageContext.data?.description ||
    pageContext.config.description ||
    `Default description - isClientNav: ${pageContext.isClientSideNavigation}`;

  return description;
}
