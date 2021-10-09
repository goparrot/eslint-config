export = {
    extends: ['plugin:react/recommended'],
    plugins: ['react-hooks', '@strdr4605/react-props-destructuring'],
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
        '@strdr4605/react-props-destructuring/no-multiline': 'warn',
    },
};
