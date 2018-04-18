module.exports = {
    "plugins": ["import", "jsx-a11y","react"],
    "rules": {
        "linebreak-style": ["error","windows"],
        "no-plusplus": [0],
        "func-names": [0],
    },
    "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        }
    },
    "extends": "airbnb-base"

};