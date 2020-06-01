module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017
    },
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true
    },
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended']
};
