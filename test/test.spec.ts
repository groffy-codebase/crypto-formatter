import { it } from "node:test";
import index from "../index";
import { describe, test, expect } from "vitest";
import removeTrailingZeros from "../src/utils/removeTrailingZeros";
import getAbbr from "../src/utils/getAbbr";
import splitter from "../src/utils/splitter";
import floatable from "../src/utils/floatable";
import addCommas from "../src/utils/addCommas";
describe("floatable", () => {
  test("throws invalid float for having multiple dots", () => {
    expect(() => floatable("0.000.78878")).throws("Invalid Float");
  });

  test("removes everything non-integers and dots", () => {
    expect(floatable("()^&^<8985738^.8^%#768&&^%476()^48")).to.equal(
      "8985738.876847648"
    );
  });
});

test("#removeTrailingZeros", async () => {
  expect(removeTrailingZeros("1234.1234000")).to.equal("1234.1234");
  expect(removeTrailingZeros("1234.12345000")).to.equal("1234.12345");
  expect(removeTrailingZeros("1234.123456000")).to.equal("1234.123456");
});

test("#removeTrailingZeros where end is dot", async () => {
  expect(removeTrailingZeros("1234.0")).to.equal("1234");
  expect(removeTrailingZeros("1234.0", false)).to.equal("1234.");
});

test("#getAbbr", () => {
  expect(getAbbr("1000000", 1)).deep.equal(["1.0", 2]);
  expect(getAbbr("1000000", 2)).deep.equal(["1000.0", 1]);
  expect(getAbbr("1000000", 3)).deep.equal(["1000.0", 1]);
  expect(getAbbr("1000000", 5)).deep.equal(["1000000.0", 0]);
  expect(getAbbr("1000000000", 5)).deep.equal(["1000000.0", 1]);
});



test("#splitter", () => {
  let splitted = splitter("1234.1234");
  expect(splitted.splitted).to.deep.equal(["1234", "1234"]);
  expect(() => splitter("0.0.")).to.throws("Invalid Float");
  splitted = splitter("100.")
  expect(splitted.splitted).to.deep.equal(["100", "0"]);
  splitted = splitter("100.", "z")
  expect(splitted.splitted).to.deep.equal(["100", "z"]);
});


test("#addCommas", async () => {
  // console.log("add commas %s", addCommas("1000000"), addCommas("1000000"));
  expect(addCommas("1000")).to.equal("1,000");
  expect(addCommas("1000000")).to.equal("1,000,000");
  expect(addCommas("10000000")).to.equal("10,000,000");
  expect(addCommas("100000000")).to.equal("100,000,000");
  expect(addCommas("1000000000")).to.equal("1,000,000,000");
})