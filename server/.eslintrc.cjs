module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        // Prettier must be last to override other configs
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['**/*.d.ts'],
    settings: {
        'import/extensions': ['.js', '.jsx'],
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017,
    },
    plugins: ['@typescript-eslint', 'mocha', 'simple-import-sort', 'import'],
    rules: {
        '@typescript-eslint/ban-ts-ignore': ['off'],
        '@typescript-eslint/ban-types': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                overrides: {
                    constructors: 'no-public',
                    parameterProperties: 'off',
                },
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'private-static-field',
                    'protected-static-field',
                    'public-static-field',
                    'private-instance-field',
                    'protected-instance-field',
                    'public-instance-field',
                    'private-constructor',
                    'protected-constructor',
                    'public-constructor',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                ],
            },
        ],
        '@typescript-eslint/no-empty-interface': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-non-null-assertion': ['off'],
        '@typescript-eslint/no-shadow': [
            'error',
            {
                builtinGlobals: true,
                hoist: 'all',
            },
        ],
        '@typescript-eslint/no-this-alias': ['off'],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            },
        ],
        indent: 0,
        semi: ['error', 'always'],
        'mocha/no-exclusive-tests': 'error',
        'no-shadow': 'off',
        'no-template-curly-in-string': 'error',
        'no-unused-vars': 'off',
        'prefer-spread': 'off',
        'prettier/prettier': [
            'error',
            {
                printWidth: 100,
                parser: 'typescript',
                useTabs: false,
                semi: true,
                singleQuote: true,
                trailingComma: 'es5',
                bracketSpacing: true,
                arrowParens: 'always',
                tabWidth: 4,
            },
        ],
        'require-atomic-updates': 'off',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // internal imports
                    ['^@getgo/.*$'],
                    // Anything not matched in another group.
                    ['^'],
                    // parent imports. Put `..` first.
                    ['^\\.\\.$', '^\\.\\./.*$'],
                    // Other relative imports. Put `.` first.
                    ['^\\.$', '^\\./.*$'],
                ],
            },
        ],
        'import/no-absolute-path': [2, { esmodule: true, amd: false, commonjs: true }],
        'import/no-named-as-default': [2],
        'import/no-commonjs': [1],
        'import/no-duplicates': [2],
        'import/extensions': [2, 'ignorePackages', { js: 'always' }],
    },
};
