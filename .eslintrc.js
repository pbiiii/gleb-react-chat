module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/prop-types": 1,
        "react/jsx-filename-extension": "off",
        "react/jsx-indent": [
            "error",
            4,
        ],
        "no-underscore-dangle": "off",
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/jsx-boolean-value": "off",
        "react/no-access-state-in-setstate": "off",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
            }
        ],
        "global-require": "off",
        "import/no-dynamic-require": "off",
        "import/no-unresolved": [
            "error",
            {
                "ignore": [ 'src' ]
            }
        ],
        "no-unused-vars": [
            "error",
            {
                "varsIgnorePattern": "^React$"
            }
        ],
    },
};