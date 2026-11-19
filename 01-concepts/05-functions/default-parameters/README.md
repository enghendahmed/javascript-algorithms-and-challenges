# Default Parameters in JavaScript

A short, practical demo of **default parameters** (ES6) in JavaScript, using a simple flight-booking function.

## What This Project Shows

- How to set default values for function parameters
- Why default parameters are better than the old ES5 `||` approach
- Using expressions as default values
- Using earlier parameters inside later defaults
- Skipping a parameter with `undefined`

## Code Example

```js
'use strict';
const booking = [];

const createFlight = function (flightNumber, passengerNumber = 1, cost = 2000) {
  const passengerBooking = {
    flightNumber,
    passengerNumber,
    cost,
  };

  booking.push(passengerBooking);
  console.log(booking);
};

createFlight('H.123');
```

**Output:**

```js
[{ flightNumber: 'H.123', passengerNumber: 1, cost: 2000 }];
```

Since only `flightNumber` was passed, `passengerNumber` and `cost` fall back to their default values.

## Key Notes

### 1. Defaults are used only when the argument is not provided

If the argument is missing (or `undefined`), the default value is used.

### 2. You can use expressions as default values

```js
const createFlight = function (
  flightNumber,
  passengerNumber = 1,
  cost = 2000 * 2,
) {};
```

### 3. You can use a previous parameter in a later default

```js
const createFlight = function (
  flightNumber,
  passengerNumber = 1,
  cost = passengerNumber * 2,
) {};
```

> ⚠️ You **cannot** use a parameter that comes _after_ the current one.

### 4. Skip a parameter by passing `undefined`

```js
createFlight('H.123', undefined, 2000);
```

This skips `passengerNumber`, so its default value (`1`) is used.

### 5. The old ES5 way (avoid)

```js
passengerNumber = passengerNumber || 1;
cost = cost || 2000;
```

This is less clean and can cause bugs with falsy values like `0`. Use default parameters instead.

## Learning Source

This example is based on a video lesson about default parameters from the JavaScript course by Jonas Schmedtmann.

## Author

**Hend Ahmed**
[LinkedIn](https://linkedin.com/in/enghendahmed)
