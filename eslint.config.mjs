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
		rules: {
			'better-code/no-angular': 'error',
			'better-code/no-react-namespace': 'error',
		},
	},
]);
