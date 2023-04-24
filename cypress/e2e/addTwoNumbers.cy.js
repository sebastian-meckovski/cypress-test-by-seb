describe("add two numbers", () => {
  it("my first test", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="number-one"]').type(5);
    cy.get('[data-test-id="number-two"]').type(8);
    cy.get('[data-test-id="add-two-numbers"]').click();
    cy.get('[data-test-id="result-label"]').should('contain', '13');
  });
});

describe("reset journey", () => {
  it("my first test", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="reset-button"]').click();
    cy.get('[data-test-id="result-label"]').should('contain', 'Enter two numbers');
  });
});

describe("add two numbers", () => {
  it("my first test", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="number-one"]').type(8);
    cy.get('[data-test-id="number-two"]').type(9);
    cy.get('[data-test-id="add-two-numbers"]').click();
    cy.get('[data-test-id="result-label"]').should('contain', '17');
  });
});
