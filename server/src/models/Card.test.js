const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card } = require(".");
const db = require("../db/config");

let card;

// clear db and create new card before tests
beforeAll(async () => {
  await db.sync({ force: true });
  card = await Card.create({ name: "one" });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("Card", () => {
  it("Is an instnce of Card", async () => {
    expect(card).toBeInstanceOf(Card);
  });

  it("has a", async () => {
    expect(card).toHaveProperty("id");
  });

  it("has the correct mojo", async () => {
    expect(card.mojo).toBe("one");
  });

  it("has the correct stamina", async () => {
    expect(card.stamina).toBe("ten");
  });

  it("has the correct imgUrl", async () => {
    expect(card.imgUrl).toBe("");
  });
});
