# string-between

> Get a string between (when compared) two other strings

## Install

```
$ yarn add string-between
```

## Usage

It can, for example, be usefull to represent an ordered list in a database:
You keep indexes as string and order the list with them.
This way you can add new element at the end or insert between elements as much as you want without editing other indexes.

```js
const stringBefore = "A";
const stringAfter = "B";
const stringBetween = getStringBetween(stringBefore, stringAfter);
console.log(stringBetween);
//=> "AW"
// "AW" > "A" && "AW" < "B"

// This works indefinitely:

const stringBefore = "A";
const stringAfter = "AW";
const stringBetween = getStringBetween(stringBefore, stringAfter);
console.log(stringBetween);
//=> "AC"
// "AC" > "A" && "AC" < "AW"

// You can also add after:

const stringBefore = "A";
const stringAfter = getStringBetween(stringBefore);
console.log(stringAfter);
//=> "B"
// "B" > "A"

// or before:

const stringAfter = "A";
const stringBefore = getStringBetween(null, stringAfter);
console.log(stringBefore);
//=> "8"
// "8" < "A"

// or even to start with

const string = getStringBetween();
console.log(string);
//=> "W"
```

## Parameters

### string before (Optional)

### string after (Optional)

### minimum char code (Optional: default to 48)

### maximum char code (Optional: default to 126)
