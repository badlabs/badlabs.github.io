---
description: 'Learn about ExchangeClient class.'
sidebar: 'docs'
---

# class ExchangeClient{}

`ExchangeClient` is the first layer between exchange and `TradeBot`. This class has methods for connecting to exchange directly and returning exchange types from operations.

## Structure

`ExchangeClient` functionality is divided into 3 modules:

- Main - it is `ExchangeClient` itself. it contains methods for getting meta information about exchange account.
- `InfoModule` - gets information about exchange state.
- `TradeModule` - sends orders to exchange.


## Classes

Classes for `ExchangeClient` should be defined with `C_` (stands for "Client") prefix in special file. Also, special methods for types translation `C_` => `D_` (stands for "Database") should be defined.

## Main module

### getPortfolio()

- returns type `C_Portfolio`

`getPortfolio()` methods requests information about state of portfolio, linked to exchange account.

## InfoModule

### getCurrencies()

- returns type `C_Currency[]`

### getSecurityLastPrice()

- returns type `number`

### getSecurityName()

- returns type `string`

### getSecurityOperations()

- returns type `C_Operation[]`

### getSecurity()

- returns type `C_Security`

## TradeModule

### sell()

- returns type `C_Order`

### buy()

- returns type `C_Order`

### sellOrCancel()

- returns type `C_Order`

### buyOrCancel()

- returns type `C_Order`
