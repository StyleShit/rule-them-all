import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { betterCode } from './src/eslint-plugin-better-code/plugin.js';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: {
			js,
			'better-code': betterCode,
		},
		extends: ['js/recommended'],
		rules: {
			'better-code/no-angular': 'error',
		},
	},
]);
