export const APP_META_TITLE = 'Vendure Remix Storefront';
export const APP_META_DESCRIPTION =
  'A headless commerce storefront starter kit built with Remix & Vendure';

// We keep the demo URL around for reference, but we no longer fall back to it.
export const DEMO_API_URL = 'https://readonlydemo.vendure.io/shop-api';

// Fail fast if the environment variable is missing
if (typeof process !== 'undefined' && !process.env.VENDURE_API_URL) {
  throw new Error(
    'Missing VENDURE_API_URL environment variable. Please set it in your frontend service on Render.'
  );
}

// Use the environment variable directly
export let API_URL =
  typeof process !== 'undefined'
    ? process.env.VENDURE_API_URL!
    : DEMO_API_URL;

/**
 * This function is used when running in Cloudflare Pages in order to set the API URL
 * based on an environment variable. Env vars work differently in CF Pages and are not available
 * on the `process` object (which does not exist). Instead, it needs to be accessed from the loader
 * context, and if defined we use it here to set the API_URL var which will be used by the
 * GraphQL calls.
 *
 * See https://developers.cloudflare.com/workers/platform/environment-variables/#environmental-variables-with-module-workers
 */
export function setApiUrl(apiUrl: string) {
  API_URL = apiUrl;
}
