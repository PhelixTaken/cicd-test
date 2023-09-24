describe("template spec", () => {
  it("passes", async () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("eq", "http://localhost:3000/");
  });
});
