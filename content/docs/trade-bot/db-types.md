---
description: ''
sidebar: 'docs'
---

# @badlabs/trade-bot__db-types

- GitHub repository: https://github.com/badlabs/trade-bot__db-types  
- NPM page: https://www.npmjs.com/package/@badlabs/trade-bot__db-types  
- GitHub package: https://github.com/badlabs/trade-bot__db-types/packages/1420140  

This package contains types for [trade-bot](https://github.com/badlabs/trade-bot--tinkoff) database. These types are shared between [trade-bot](https://github.com/badlabs/trade-bot--tinkoff) and [dashboard](https://github.com/badlabs/trade-bots-dashboard).

> NOTE: types do not include interconnectivities between tables

Inside `TradeBot` these types are used with `D_` prefix. It is because of it can be types with same names from exchange SDK. But in `@badlabs/trade-bot__db-types` package these prefixes are deleted.

This package also includes same interfaces with `I` prefix, if you want to extend these types.

## Installation

To install this package, execute next command:

```shell
npm install @badlabs/trade-bot__db-types
```

## Usage

This package can useful for integrating `TradeBot` with your programs. Badlabs use it for integration with dashboard.

```ts
import { ICurrency, Security } from "@badlabs/trade-bot__db-types";

export type GetCurrenciesResponse = ICurrency[]
export type UpdateCurrenciesResponse = ICurrency[]
export type GetSecuritiesResponse = Security[]
export type UpdateSecuritiesResponse = Security[]
```

## Process automation

Publishing of this package is fully automated with GitHub actions.

After pushing changes into master branch of TradeBot, starts special [GitHub action](https://github.com/badlabs/trade-bot--tinkoff/blob/master/.github/workflows/update-db-types-repo.yml) for getting types for database schema. If there are any changes, it:

1. changes version in `package.json`,
2. generates new release for GitHub repository,
3. publish package in GitHub and NPM package registries.
