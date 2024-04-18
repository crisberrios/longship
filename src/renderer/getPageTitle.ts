export { getPageTitle };

import type { PageContext } from "vike/types";

function getPageTitle(pageContext: PageContext): string {
  const title =
    // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js)
    // The setting 'pageContext.config.title' is a custom setting we defined at ./+config.ts
    pageContext.title ||
    pageContext.config.title ||
    pageContext.data?.title ||
    `Vike Demo - isClientNav: ${pageContext.isClientSideNavigation}`;

  return title;
}
