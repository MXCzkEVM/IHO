import { defineConfig } from '@genapi/core'

export default defineConfig({
  input: `${process.env.NEXT_PUBLIC_SERVER_URL}/swagger/json`,
  pipeline: 'swag-fetch-ts',
  baseURL: 'process.env.NEXT_PUBLIC_SERVER_URL',
  output: {
    main: 'api/index.ts',
    type: 'api/index.type.ts',
  },
})
