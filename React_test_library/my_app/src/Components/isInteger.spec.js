const isInteger = require("./isInteger");

const integerNumbers = [-1, 0, 1];

test.each(integerNumbers)(
    "isInteger passes for integer value %j",
    (fixture) => expect(isInteger(fixture)).toBe(true)
);
