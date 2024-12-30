import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default tseslint.config(
  /** 推奨設定 */
  js.configs.recommended,
  ...tseslint.configs.recommended,

  /** 対象ファイルの設定 */
  {
    files: ["**/*.{js,ts,mjs,mts,cjs,cts,jsx,tsx}"],
  },
  includeIgnoreFile(gitignorePath),

  /** 構文解析設定 */
  {
    languageOptions: {
      globals: {
        ...globals.browser, // consoleの定義
        ...globals.node, // processの定義
      },
      parserOptions: {
        ecmaVersion: "ES2024",
        sourceType: "module",
      },
    },
  },

  // Prettier併用設定
  eslintConfigPrettier,
);
