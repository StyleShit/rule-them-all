import { noAngular } from './rules/no-angular.js';

/**
 * @type {import('eslint').ESLint.Plugin}
 */
export const betterCode = {
	meta: {
		name: 'eslint-plugin-custom',
		version: '1.0.0',
		namespace: 'better-code',
	},
	rules: {
		'no-angular': noAngular,
	},
};
