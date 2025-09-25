interface ImportMetaEnv {
  readonly VITE_APP_NETWORK?: string;
  readonly VITE_MODULE_ADDRESS?: string;
  readonly VITE_APTOS_API_KEY?: string;
  // add other env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}