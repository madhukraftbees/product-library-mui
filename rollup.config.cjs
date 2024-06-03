// const commonjs = require("@rollup/plugin-commonjs");
// const nodeResolve = require("@rollup/plugin-node-resolve");
// const typescript = require("@rollup/plugin-typescript");
// const dts = require("rollup-plugin-dts").default;

// module.exports = [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: "dist/cjs/index.js",
//         format: "cjs",
//       },
//       {
//         file: "dist/esm/index.js",
//         format: "esm",
//       },
//     ],
//     plugins: [nodeResolve(), commonjs(), typescript()],
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "es" }],
//     plugins: [dts()],
//   },
// ];

const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts").default;

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true, // Add this line for source maps
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true, // Add this line for source maps
      },
    ],
    plugins: [nodeResolve(), commonjs(), typescript()],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
