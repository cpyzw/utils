import type { Options } from 'tsup'

const options: Options = {
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  entryPoints: [
    'src/index.ts',
    'src/dom/index.ts',
  ],
  external: [],
}

export default options
