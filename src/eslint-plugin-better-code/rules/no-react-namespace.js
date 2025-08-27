/**
 * @type {import('eslint').Rule.RuleModule}
 */
export const noReactNamespace = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow using `React.useHook`.',
		},
	},
	create(context) {
		return {};
	},
};
