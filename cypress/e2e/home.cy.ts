describe("template spec", () => {
  it("passes", async () => {
    cy.visit("http://localhost:5001/");
    cy.url().should("eq", "http://localhost:5001/");
  });
});
