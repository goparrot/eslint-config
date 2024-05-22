import type { Linter } from 'eslint';

const config: Linter.Config = {
    rules: {
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/alt-text': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
    },
};

export = config;
