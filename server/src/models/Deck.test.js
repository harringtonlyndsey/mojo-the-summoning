const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Deck } = require(".");
const db = require("../db/config");

let deck;

// clear db and create new deck before tests
beforeAll(async () => {
  await db.sync({ force: true });
  deck = await Deck.create({ name: "one" });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("Deck", () => {
  it("Is an instnce of Deck", async () => {
    expect(deck).toBeInstanceOf(Deck);
  });

  it("has a", async () => {
    expect(deck).toHaveProperty("id");
  });

  it("has the correct name", async () => {
    expect(deck.name).toBe("one");
  });

  it("has the correct xp", async () => {
    expect(deck.xp).toBe("ten");
  });
});
