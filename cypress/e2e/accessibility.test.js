// <reference types="Cypress" />

describe("Accessibility tests", () => {
  // Test home page
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
  //   Test one of the pokemon pages
  beforeEach(() => {
    cy.visit("/pikachu").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
});
