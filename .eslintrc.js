module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    "vue/require-prop-type-constructor": "off",
    "vue/no-side-effects-in-computed-properties": "warn",
    "no-unused-vars": "error",
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 3
      },
      multiline: {
        max: 1
      }
    }],
    "vue/html-self-closing": ["error", {
      html: {
        void: "always",
      },
    }],
    indent: [
      "error",
      2,
      { SwitchCase: 1, ignoredNodes: ["ConditionalExpression"] },
    ],
  },
};
