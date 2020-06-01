module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "@homeaway/eslint-config",
        "@homeaway/eslint-config/node8",
        "@homeaway/eslint-config/es6",
        "@homeaway/eslint-config/react",
        "@homeaway/eslint-config/jsx-a11y",
        "plugin:prettier/recommended"
    ],
    "settings": {
        "react": {
            "pragma": "React", // Pragma to use, default to "React"
            "version": "detect" // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
        }
    },
    "env": {
        "jest": true
    },
    "rules": {
        "complexity": "off",
        "no-unused-vars": [
            "error",
            {"vars": "all", "args": "after-used", "ignoreRestSiblings": true}
        ]
    },
    "plugins": ["prettier"]
};
