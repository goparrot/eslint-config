import type { Linter } from 'eslint';

const config: Linter.Config = {
    extends: ['plugin:react/recommended'],
    plugins: ['react-hooks'],
    rules: {
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-curly-brace-presence': [
            'error',
            {
                props: 'never',
            },
        ],
    },
};

export = config;
