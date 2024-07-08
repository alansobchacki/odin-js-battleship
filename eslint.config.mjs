import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "module", ecmaVersion: "latest" },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
