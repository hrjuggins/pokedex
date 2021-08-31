// <reference types="Cypress" />

describe("Search test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should find pikachu as the first pokemon", () => {
    cy.get("input").type("pikachu");
    cy.get("ul li:first").get("p").wait(1000).should("have.text", "pikachu");
  });
});
