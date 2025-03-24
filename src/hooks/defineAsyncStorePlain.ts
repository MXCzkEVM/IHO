import { defineAsyncStore, DefineAsyncStoreOptions } from "./defineAsyncStore";

export function defineAsyncStorePlain<T>(
  hooker: () => Promise<T>,
  options: DefineAsyncStoreOptions<T> = {},
) {
  return defineAsyncStore(() => async () => hooker(), options)
}
