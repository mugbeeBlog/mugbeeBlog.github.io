/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-html',
    'stylelint-config-html/astro',
    'stylelint-config-prettier-scss',
  ],

  rules: {
    'selector-class-pattern': [
      '^[a-z][a-z0-9-]*(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$',
      {
        message:
          'クラスセレクターは BEM 記法（block__element--modifier）に従ってください。',
      },
    ],
  },

  overrides: [
    {
      files: ['**/*.astro'],
      rules: {
        'no-descending-specificity': null,
      },
    },
  ],
};
