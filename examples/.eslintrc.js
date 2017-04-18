module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": ["eslint:recommended"],
    "rules": {
        "indent": [
            "error",
            2,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [ "off", {"allow": ["error","warn"]} ]
    }
};
