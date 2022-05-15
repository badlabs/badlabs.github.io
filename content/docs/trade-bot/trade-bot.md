---
description: 'Learn about TradeBot class.'
sidebar: 'docs'
---

# class TradeBot{}

## ExchangeWatcher

`ExchangeWatcher` is created for using `ExchangeClient` methods and translate callbacks into types of local database with `D_` prefix.

## ExchangeTrader

`ExchangeTrader` sends or schedules requests using objects of `OrderDetails` type.

## ExchangeAnalyser

`ExchangeAnalyser` works with local database. It creates or updates data with information from `ExchangeWatcher`. Also, it can make some complicated querries to database.

It is convenient to group all methods by data models.

### D_Currency

```ts
type D_Currency = {
  name: string
  ticker: string
}
```

#### getCurrencies()

#### updateCurrencies()

### D_Security

```ts
type D_Security = {
  name: string
  ticker: string
  price: number
  currency_ticker: string
}
```

#### getSecurities()

#### updateSecurities()

#### ~~addSecurities()~~

### D_FollowedSecurity

```ts
type D_FollowedSecurity = {
  security_ticker: string
  followed_since: Date
}
```

#### ~~getFollowedSecurities()~~

#### ~~followSecurity()~~

#### ~~unfollowSecurity()~~

#### ~~updateFollowedSecurities()~~

### D_PortfolioPosition

```ts
type D_PortfolioPosition = {
  security_ticker: string
  amount: number
}
```

#### getPortfolio()

#### updatePortfolio()

#### ~~clearPortfolio()~~

#### ~~addPortfolioPosition()~~

#### ~~removePortfolioPosition()~~

#### ~~getPositionAverageBuyPrice()~~

### D_Operation

```ts
type D_Operation = {
  exchange_id: string | null
  security_ticker: string
  status: string
  operation_type: string
  amount: number
  price: number
  updated_at: Date
  created_at: Date
}
```

#### ~~addOperation()~~

#### ~~updateOperation()~~

#### ~~updateOperationsAll()~~

#### ~~updateOperationsBySecurity()~~

#### ~~getOperationsAll()~~
