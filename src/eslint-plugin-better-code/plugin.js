import { noAngular } from './rules/no-angular.js';
import { noReactNamespace } from './rules/no-react-namespace.js';

/**
 * @type {import('eslint').ESLint.Plugin}
 */
export const betterCode = {
	meta: {
		name: 'eslint-plugin-better-code',
		version: '1.0.0',
		namespace: 'better-code',
	},
	rules: {
		'no-angular': noAngular,
		'no-react-namespace': noReactNamespace,
	},
};
