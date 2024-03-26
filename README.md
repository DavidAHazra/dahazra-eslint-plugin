# @dahazra/eslint-plugin

A personal plugin made by David Hazra

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@dahazra/eslint-plugin`:

```sh
npm install @dahazra/eslint-plugin --save-dev
```

## Usage

Add `@dahazra/eslint-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@dahazra/eslint-plugin"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@dahazra/eslint-plugin/rule-name": 2
    }
}
```



## Configurations

<!-- begin auto-generated configs list -->

|    | Name          |
| :- | :------------ |
| ✅  | `recommended` |

<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.

| Name                                   | Description                                                | 💼 |
| :------------------------------------- | :--------------------------------------------------------- | :- |
| [next-image](docs/rules/next-image.md) | Enforce required attributes on the Next.js Image component | ✅  |

<!-- end auto-generated rules list -->


