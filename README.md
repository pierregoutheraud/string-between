# string-between

> Get a string between (when compared) two other strings

## Install

```
$ yarn add string-between
```

## Usage

```js
const stringBefore = "ab2_23";
const stringAfter = "bb3c2}";
const stringBetween = getStringBetween(str1, str2);
console.log(stringBetween);
//=> "ab2a"
```

## Parameters

### string before

### string after

### minimum char code (default to 48)

### maximum char code (default to 126)
