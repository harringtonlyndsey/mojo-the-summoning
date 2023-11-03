const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Attack } = require(".");
const db = require("../db/config");

let attack;

// clear db and create new attack before tests
beforeAll(async () => {
  await db.sync({ force: true });
  attack = await Attack.create({ title: "Mojo" });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("Attack", () => {
  it("Is an instnce of Attack", async () => {
    expect(attack).toBeInstanceOf(Attack);
  });

  it("has a", async () => {
    expect(attack).toHaveProperty("id");
  });

  it("has the correct mojoCost", async () => {
    expect(attack.mojoCost).toBe("one");
  });

  it("has the correct staminaCost", async () => {
    expect(attack.staminaCost).toBe("ten");
  });
});
