// <reference types="Cypress" />

describe("Navigation test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to pokemon page when selecting a pokemon", () => {
    cy.get("a:first").click();
    cy.url().should("include", "bulbasaur");
  });
});
