/**
 * @type {import('eslint').Rule.RuleModule}
 */
export const noAngular = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow naming something "angular"',
		},
	},
	create(context) {
		return {};
	},
};
