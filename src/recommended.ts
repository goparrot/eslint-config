import type { Linter } from 'eslint';

const config: Linter.Config = {
    extends: ['./base'],
    rules: {
        radix: 'error',
        yoda: ['error', 'never'],
        eqeqeq: ['error', 'smart'],
        'prettier/prettier': 'error',
        'import/default': 'off',
        'import/no-deprecated': 'warn',
        'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-require-imports': ['error'],
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/ban-types': ['error'],
        '@typescript-eslint/consistent-type-imports': ['error'],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true, args: 'after-used' }],
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
        '@typescript-eslint/promise-function-async': [
            'error',
            {
                allowAny: true,
            },
        ],
        '@typescript-eslint/ban-ts-comment': [
            2,
            {
                'ts-ignore': 'allow-with-description',
            },
        ],
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-require-imports': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
};

export = config;
