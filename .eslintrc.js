module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  // "extends": "standard-with-typescript",
  // "overrides": [
  // ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "indent": ["error", 2], // Используйте 2 пробела для отступа

    "quotes": ["error", "double"], // Одинарные кавычки для строк

    // Обязательно указывать типы для параметров функций
    "@typescript-eslint/explicit-function-return-type": "error",

    // Запрет на использование "any" типа
    "@typescript-eslint/no-explicit-any": "error",

    // Запрет на неиспользуемые переменные и параметры
    "@typescript-eslint/no-unused-vars": "error",

    // Запрет на неинициализированные классы
    "@typescript-eslint/no-non-null-assertion": "error",

    // Обязательно указывать видимость (public/private/protected) для классов и членов классов
    // "@typescript-eslint/explicit-member-accessibility": "error",

    // Запрет на использование "any" для возвращаемых функций
    "@typescript-eslint/explicit-module-boundary-types": "error",

    // Обязательно указывать типы для свойств и переменных
    "@typescript-eslint/typedef": ["error", { "propertyDeclaration": true, "variableDeclaration": true }],

    "no-trailing-spaces": "error",
  },
}
