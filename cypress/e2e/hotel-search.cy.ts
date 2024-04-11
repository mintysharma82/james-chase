describe("search page spec", () => {
  it("should work as expected for the 5 star rating filter", () => {
    cy.visit(
      "http://localhost:3000/results?bookingType=holiday&location=orlando&gateway=LHR&departureDate=17-05-2024&duration=7&partyCompositions=a2"
    );

    cy.get(".rating-4star").then(($item) => {
      if ($item.length > 1) {
        cy.get("#5-star").click();
        cy.get(".rating-4star").should("have.length", 1);
        cy.get("#5-star").click();
      }
    });

    cy.get(".rating-3star").then(($item) => {
      if ($item.length > 1) {
        cy.get("#5-star").click();
        cy.get(".rating-3star").should("have.length", 1);
        cy.get("#5-star").click();
      }
    });

    cy.get(".rating-villa").then(($item) => {
      if ($item.length > 1) {
        cy.get("#5-star").click();
        cy.get(".rating-villa").should("have.length", 1);
        cy.get("#5-star").click();
      }
    });
  });
});
