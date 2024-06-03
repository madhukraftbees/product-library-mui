import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;

// {
//     "name": "@madhukraftbees/kraft-product",
//     "version": "0.0.3",
//     "scripts": {
//       "rollup": "rollup -c"
//     },
//     "author": "kraftbees",
//     "license": "ISC",
//     "description": "",
//     "devDependencies": {
//       "@rollup/plugin-commonjs": "^25.0.8",
//       "@rollup/plugin-node-resolve": "^15.2.3",
//       "@rollup/plugin-typescript": "^11.1.6",
//       "@types/react": "^18.3.3",
//       "react": "^18.3.1",
//       "rollup": "^4.18.0",
//       "rollup-plugin-dts": "^6.1.1",
//       "rollup-plugin-postcss": "^4.0.2",
//       "typescript": "^5.4.5"
//     },
//     "main": "dist/cjs/index.js",
//     "module": "dist/esm/index.js",
//     "files": [
//       "dist"
//     ],
//     "types": "dist/index.d.ts",
//     "publishConfig": {
//       "registry": "https://npm.pkg.github.com/madhukraftbees"
//     },
//     "type": "module",
//     "dependencies": {
//       "tslib": "^2.6.2"
//     }
//   }
