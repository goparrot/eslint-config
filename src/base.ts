export = {
    root: true,
    env: {
        es6: true,
        node: true,
        // browser: true,
        // mocha: true,
        // jest: true,
    },
    // to ignore custom directories and files, please use the .eslintignore file
    ignorePatterns: [
        // eslint by default ignores '/**/node_modules/*', but it's a little stupid, because it starts checking all the first level folders inside node_modules
        'node_modules',
        '.yalc',
        // eslint by default ignores all hidden directories and files
        // don't ignore hidden files in the root directory (for example: .commitlintrc.js, .prettierrc.json)
        '!.*.js',
        '!.*.json',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.eslint.json',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': { 'eslint-import-resolver-typescript': true },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'import', 'prettier'],
};
