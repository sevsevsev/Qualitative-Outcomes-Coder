/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** "explorer" builds the public codebook explorer site instead of the coder. */
  readonly VITE_SITE?: string;
  /** Name shown in the explorer site's header and browser tab. */
  readonly VITE_SITE_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
