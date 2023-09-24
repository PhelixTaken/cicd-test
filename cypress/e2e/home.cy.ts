describe("template spec", () => {
  it("passes", async () => {
    cy.visit("http://localhost:5000/");
    cy.url().should("eq", "http://localhost:5000/");
  });
});
