declare global {
  namespace Vike {
    interface PageContext {
      config: { title?: string; description?: string };
      data?: { [key: string]: unknown; title?: string; description?: string };
      Page: () => JSX.Element;
      renderSource: string; // this property always comes from initContext
      title?: string;
      description?: string;
    }
  }
}

// If you define Vike.PageContext in a .d.ts file then
// make sure there is at least one export/import statment.
// Tell TypeScript this file isn't an ambient module:
export {};
