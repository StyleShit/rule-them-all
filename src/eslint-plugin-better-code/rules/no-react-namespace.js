/**
 * @type {import('eslint').Rule.RuleModule}
 */
export const noReactNamespace = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow using `React.useHook`.',
		},
		fixable: 'code',
	},
	create(context) {
		return {
			'CallExpression[callee.object.name="React"]': (node) => {
				if (!node.callee.property.name.startsWith('use')) {
					return;
				}

				context.report({
					node,
					message:
						'Using `React.useHook` is not allowed. Use direct imports instead.',

					fix: (fixer) => {
						const hookName = node.callee.property.name;

						return fixer.replaceText(node.callee, hookName);
					},
				});
			},
		};
	},
};
