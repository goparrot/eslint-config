## How to use

```bash
npm install --save-dev @goparrot/eslint-config
```

Installed libraries out of the box:

*   [eslint](https://github.com/eslint/eslint)
*   [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)
*   [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
*   [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript)
*   [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
*   [prettier](https://github.com/prettier/prettier)
*   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
*   [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

### Choose the right set of rules

### Create the `.eslintrc.js` file in the directory next to `package.json`

```javascript
module.exports = {
  extends: ["@goparrot/eslint-config/recommended"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  rules: {
    // rules to override.
  },
};
```

You should create the `tsconfig.eslint.json` in your project.

See the examples of [tsconfig.json](tsconfig.json) and [tsconfig.eslint.json](tsconfig.eslint.json) in this repository.

### Choose the right set of rules

Common recommended rules:

    extends: ['@goparrot/eslint-config/recommended']

Less strict rules:

    extends: ['@goparrot/eslint-config/recommended', '@goparrot/eslint-config/less-strict']

For a frontend project with `react` and `jsx`:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

    extends: ['@goparrot/eslint-config/recommended', '@goparrot/eslint-config/react', '@goparrot/eslint-config/jsx']

### Create the `.eslintignore` file in the directory next to `.eslintrc.js`

```gitignore
# you must any dot `.file` which you want to ignore
# by default we don't ignore hidden `!.*.js` and `!.*.json` files in the root directory (for example: `.commitlintrc.js`, .`prettierrc.json`)
# example: if you don't want to ignore these files
!.eslintrc.js

# don't forget to add here all ignored folders or files from .gitignore that you don't need to check with a linter (there is no magic)
# by default we ignore `node_modules` and `.yalc` folders in the root directory
# example: if you want to ignore these files or directories
dist
coverage
test-reports
.nyc_output
.bit
```

### add npm scripts

```json
{
  "scripts": {
    "prettier": "npm run prettier:base -- '**/**.+(md)'",
    "prettier:base": "prettier --ignore-path .eslintignore --write",
    "format": "npm run prettier && npm run lint -- --fix",
    "format:base": "npm run lint:base -- --fix",
    "format:staged": "git add . && lint-staged --allow-empty -q",
    "lint": "npm run lint:base -- './**/**.{ts,tsx,js,jsx,json}'",
    "lint:base": "npm run lint:config:check && eslint",
    "lint:config:check": "eslint-config-prettier src/index.ts",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  }
}
```

### Make sure to

*   call the linter on the pre-commit hook
*   configure `prettier` to be called automatically when saving a file in the [Webstorm](https://www.jetbrains.com/help/webstorm/prettier.html#ws_prettier_install) or [vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#format-on-save)
