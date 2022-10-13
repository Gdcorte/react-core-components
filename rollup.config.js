import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import pkg from './package.json'

export default [
  {
    input: "src/index.tsx",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" })
    ],
    output: [
      { 
        file: pkg.main, 
        format: "cjs",
        sourcemap: true,
      },
      { 
        file: pkg.module, 
        format: "esm",
        sourcemap: true,
      },
    ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];