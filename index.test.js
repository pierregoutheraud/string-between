const getStringBetween = require("./index.js");

describe("getStringBetween", () => {
  ["0", "9", "100", "199"].forEach(beforeStr => {
    test(`add ${beforeStr}`, () => {
      const str = getStringBetween(beforeStr);
      expect(str > beforeStr).toBe(true);
    });
  });

  test(`add 457`, () => {
    const str = getStringBetween("457");
    console.log(str);
    expect(str).toEqual("458");
  });

  [
    ["1", "2"],
    ["1", "9"],
    ["94", "95"],
    ["9", "91"],
    ["YW", "Z"],
    ["8W", "9"],
    ["85W", "9W"],
    ["qwkedjh", "qwkzedjh"],
  ].forEach(([beforeStr, afterStr]) => {
    test(`between ${beforeStr} and ${afterStr}`, () => {
      const str = getStringBetween(beforeStr, afterStr);
      expect(str > beforeStr && str < afterStr).toBe(true);
    });
  });

  test(`loop between`, () => {
    const list = [];
    let str;
    str = getStringBetween();
    list.push(str);
    str = getStringBetween(str);
    list.push(str);

    for (let i = 0; i < 100; i++) {
      str = getStringBetween(list[0], list[1]);
      expect(str > list[0] && str < list[1]).toBe(true);
      list[1] = str;
    }
  });
});
