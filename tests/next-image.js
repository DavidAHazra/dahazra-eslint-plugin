const RuleTester = require('eslint').RuleTester;
const rule = require('../lib/rules/next-image');

const ruleTester = new RuleTester({
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  });
  
ruleTester.run('next-image', rule, {
  valid: [
    {code: '<Image sizes="100vw" quality={80} priority placeholder="blur" />'},
  ],
  invalid: [
    {
        code: '<Image quality={80} priority placeholder="blur" />',
        errors: [
            {
                messageId: 'missingSizes',
            },
        ],
    },
    {
      code: '<Image sizes="100vw" priority placeholder="blur" />',
      errors: [
        {
          messageId: 'missingQuality',
        },
      ],
    },
    {
      code: '<Image sizes="100vw" quality={80} placeholder="blur" />',
      errors: [
        {
          messageId: 'missingPriority',
        },
      ],
    },
    {
      code: '<Image sizes="100vw" quality={80} priority />',
      errors: [
        {
          messageId: 'missingPlaceholder',
        },
      ],
    },
  ],
});