import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['esm', 'cjs'],
  target: 'esnext',
  banner: {
    js: '"use client";'
  }
})