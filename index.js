function getStringBetween(
  before = null,
  after = null,
  minCharCode = 48,
  maxCharCode = 126
) {
  // Should never return a string with first character at the end

  // Min and max char codes possible
  const CHARCODES = [minCharCode, maxCharCode]; // 0-9 => [48, 57]
  const firstChar = String.fromCharCode(CHARCODES[0]);
  const middleChar = String.fromCharCode(
    Math.floor((CHARCODES[0] + CHARCODES[1]) / 2)
  );

  if (!before && !after) {
    return middleChar;
  }

  if (!before) {
    before = firstChar;
  }

  function getNextChar(char) {
    const charCode = char.charCodeAt(0);
    let nextCharCode;
    if (charCode >= CHARCODES[1]) {
      return null;
    } else {
      nextCharCode = charCode + 1;
    }
    return String.fromCharCode(nextCharCode);
  }

  // Take last char and check if a next char exists
  // If not we add middleChar, if yes we update with next char
  function nextLastChar(str) {
    const nextChar = getNextChar(str[str.length - 1]);
    if (!nextChar) {
      return `${str}${middleChar}`;
    }
    return `${str.slice(0, -1)}${nextChar}`;
  }

  // We add at the end
  if (!after) {
    return nextLastChar(before);
  }

  // Swap before and after
  if (before >= after) {
    const temp = before;
    before = after;
    after = temp;
  }

  // We pad before with first char, so that we can compare same length
  before = before.padEnd(after.length, firstChar);
  after = after.padEnd(before.length, firstChar);

  let newStr = "";

  for (let i = 0; i < after.length; i++) {
    const beforeChar = before[i];
    const beforeCharCode = beforeChar && beforeChar.charCodeAt(0);
    const afterChar = after[i];
    const afterCharCode = afterChar && afterChar.charCodeAt(0);

    if (beforeChar === afterChar) {
      newStr += beforeChar;
      continue;
    }

    const roomBetween = afterCharCode - beforeCharCode - 1;

    if (roomBetween < 1) {
      // If afterChar is firstChar it means 85 vs 90
      // (firstChar here is from padEnd because no ranks can finish by firstChar otherwise)
      // so we can just getNextChar of 5 ==> 86
      if (afterChar === firstChar) {
        newStr = nextLastChar(newStr + beforeChar);
        break;
      }
      // Last char, we add middle char
      else if (i === after.length - 1) {
        newStr += `${beforeChar}${middleChar}`;
      } else {
        newStr += beforeChar;
        continue;
      }
    } else {
      const betweenChar = String.fromCharCode(
        Math.floor((afterCharCode + beforeCharCode) / 2)
      );
      newStr += betweenChar;
    }

    break;
  }

  return newStr;
}

module.exports = getStringBetween;
