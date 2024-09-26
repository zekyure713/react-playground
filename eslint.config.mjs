import globals from "globals";
// import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
	{ files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ files: ["src/**/*.js"], languageOptions: { sourceType: "commonjs" } },
	{ languageOptions: { globals: globals.browser } },
	// pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		...pluginReact.configs.flat.recommended,
		settings: {
			react: {
				version: "detect", // Automatically detect the react version
			},
		},
	},
	{
		rules: {
			"linebreak-style": ["warn", "unix"],

			"no-console": [
				"warn",
				{
					allow: ["error", "warn", "info"],
				},
			],

			"no-return-await": "warn",
			// "@typescript-eslint/no-floating-promises": "warn",
			// "@typescript-eslint/no-unnecessary-condition": "warn",

			// "@typescript-eslint/strict-boolean-expressions": ["warn", {
			//     allowNullableBoolean: true,
			//     allowAny: true,
			// }],

			"constructor-super": "warn",
			"for-direction": "warn",
			"getter-return": "warn",
			"no-async-promise-executor": "warn",
			"no-case-declarations": "warn",
			"no-class-assign": "warn",
			"no-compare-neg-zero": "warn",
			"no-cond-assign": "warn",
			"no-const-assign": "warn",
			"no-constant-condition": "warn",
			"no-control-regex": "warn",
			"no-debugger": "warn",
			"no-delete-var": "warn",
			"no-dupe-args": "warn",
			"no-dupe-class-members": "warn",
			"no-dupe-else-if": "warn",
			"no-dupe-keys": "warn",
			"no-duplicate-case": "warn",
			"no-empty": "warn",
			"no-empty-character-class": "warn",
			"no-empty-pattern": "warn",
			"no-ex-assign": "warn",
			"no-extra-boolean-cast": "warn",
			"no-extra-semi": "warn",
			"no-fallthrough": "warn",
			"no-func-assign": "warn",
			"no-global-assign": "warn",
			"no-import-assign": "warn",
			"no-inner-declarations": "warn",
			"no-invalid-regexp": "warn",
			"no-irregular-whitespace": "warn",
			"no-misleading-character-class": "warn",
			"no-new-symbol": "warn",
			"no-obj-calls": "warn",
			"no-octal": "warn",
			"no-prototype-builtins": "warn",
			"no-redeclare": "warn",
			"no-regex-spaces": "warn",
			"no-self-assign": "warn",
			"no-setter-return": "warn",
			"no-shadow-restricted-names": "warn",
			"no-sparse-arrays": "warn",
			"no-this-before-super": "warn",
			"no-unexpected-multiline": "warn",
			"no-unreachable": "warn",
			"no-unsafe-finally": "warn",
			"no-unsafe-negation": "warn",
			"no-unused-labels": "warn",
			"no-useless-catch": "warn",
			"no-useless-escape": "warn",
			"no-with": "warn",
			"require-yield": "warn",
			"use-isnan": "warn",
			"valid-typeof": "warn",
		},
	},
];
