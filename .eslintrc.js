// !minifyOnSave
// minifyOnSave: false
// !minOnSave
// minOnSave: false
module.exports = {
  "ecmaVersion": 5,
  "ecmaFeatures": {
    "jsx": false,
    "modules": false,
    "arrowFunctions": false,
    "classes": true,
    "spread": true,
  },
  "env": {
    "browser": true,
    "jquery": true
      // "es6": true
  },
  "extends": "airbnb",
  "installedESLint": true,
  "plugins": ["react"],
  // "rules": {
  // 	"indent": [ "error", "tab" ],
  // 	"linebreak-style": [ "error", "windows" ],
  // 	"quotes": [ "error", "single" ],
  // 	"semi": [ "error", "always" ]
  // },
  "globals": {
    "Materialize": true,
    "intervalID": true
  }
};
