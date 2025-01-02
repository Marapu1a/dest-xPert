export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      globals: {
        document: "readonly",
        window: "readonly",
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",
      "eqeqeq": "error",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    },
  },
];
