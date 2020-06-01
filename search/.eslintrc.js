module.exports = {
    parser: 'babel-eslint',
    extends: [
        '@homeaway/eslint-config',
        '@homeaway/eslint-config/node8',
        '@homeaway/eslint-config/es6',
        '@homeaway/eslint-config/react',
        '@homeaway/eslint-config/jsx-a11y',
        'plugin:flowtype/recommended',
        'plugin:jest/recommended',
        'plugin:you-dont-need-momentjs/recommended',
        '@homeaway/eslint-config/prettier',
    ],
    plugins: ['flowtype', 'jest'],
    globals: {
        google: true,
        jsdom: true,
    },
    env: {
        jest: true,
    },
    rules: {
        complexity: 'off',
        'flowtype/generic-spacing': 'off',
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
            },
        ],
        'react/sort-comp': [
            1,
            {
                order: [
                    'type-annotations',
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render',
                ],
            },
        ],
        'react/jsx-no-bind': [
            1,
            {
                allowArrowFunctions: true,
                ignoreRefs: true,
            },
        ],
        'jest/expect-expect': 'error',
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
};
