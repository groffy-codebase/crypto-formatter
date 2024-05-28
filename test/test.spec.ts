import index from "../index";
import { describe, test, expect } from "vitest";

describe("floatable", () => {
  test("throws invalid float for having multiple dots", () => {
    expect(() => index.floatable("0.000.78878")).throws("Invalid Float");
  });

  test("removes everything non-integers and dots", () => {
    expect(index.floatable("()^&^<8985738^.8^%#768&&^%476()^48")).to.equal(
      "8985738.876847648"
    );
  });
});

describe("Abbreviate", () => {
  describe("for base once", () => {
    test("for a thousands", () => {
      const formatter = new index.Formatter("1000", 1);
      expect(formatter.abbreviate(true, 6, true)).to.equal("1.000000 Thousand");
    });
    test("for a million", () => {
      const formatter = new index.Formatter("1000000", 1);
      expect(formatter.abbreviate(true, 6, true)).to.equal("1.000000 Million");
    });

    test("for a billion", () => {
      const formatter = new index.Formatter("1000000000", 1);
      expect(formatter.abbreviate(true, 6, true)).to.equal("1.000000 Billion");
    });

    test("for a trillion", () => {
      const formatter = new index.Formatter("1000000000000", 1);
      expect(formatter.abbreviate(true, 6, true)).to.equal("1.000000 Trillion");
    });
  });
 
  describe("for base", () => {
    test("for a thousands", () => {
      const formatter = new index.Formatter("1000", 10);
      expect(formatter.abbreviate(true, 6, true)).to.equal("1000 ");
    });
    test("for a million", () => {
      const formatter = new index.Formatter("10000000", 10);
      expect(formatter.abbreviate(true, 6, true)).to.equal("10.000000 Million");
    });

    test("for a billion", () => {
      const formatter = new index.Formatter("10000000000", 10);
      expect(formatter.abbreviate(true, 6, false)).to.equal("10.000000 Billion");
    });

    test("for a trillion", () => {
      const formatter = new index.Formatter("10000000000000", 10);
      expect(formatter.abbreviate(true, 6, false)).to.equal("10.000000 Trillion");
    });
  });
});


describe("format", () => {
  const formatter = new index.Formatter("9123456789.12345678900", 1);
  test("fomat without zeros", () => {
    expect(formatter.format(false, 0)).to.equal("9123456789.123456789");
  })
  
  test("keep  zeros", () => {
    expect(formatter.format(true, 0)).to.equal("9123456789.12345678900");
  })

  test("limit the decimals", () => {
    expect(formatter.format(true, 0, 4)).to.equal("9123456789.1234");
  })

})