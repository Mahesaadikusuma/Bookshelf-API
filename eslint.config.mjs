import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,

  {
    rules: {
      eqeqeq: "off",

      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "import/no-extraneous-dependencies": 0,
      "no-undef": "error",
      "no-console": 0,
      "no-underscore-dangle": 0,
      "no-restricted-globals": 0,
      "linebreak-style": 0,
      "no-unused-vars": 0,
    },
  },
];
