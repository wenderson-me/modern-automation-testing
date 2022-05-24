/// <reference types="cypress"/>

describe('Purchasing the product', () => {
  before(() => {
    cy.loginAPI("nanciee@gmail.com", "Kx7@MdFZR3226V5");
  });

  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/client/");
  });

  it('Add product to cart', () => {
    cy.get("div.card button:last-of-type").eq(1).click();

    cy.get("[routerlink*='cart']").click();

    cy.contains("Checkout").click();

    cy.wait(2000);

    cy.get("[placeholder*='Country']").type("Br", { delay: 700 });

    cy.get(".ta-results button").each(($e1) => {
      if ($e1.text() === "Brazil") {
        cy.wrap($el).click();
      }
    });

    cy.get(".action__submit").click();

    cy.wait(500);

    cy.get(".hero-primary").should("have.text", " Thankyou for the order. ")

    cy.get(".order-summary button").click();
  });
});