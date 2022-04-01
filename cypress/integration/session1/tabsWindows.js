///<reference types="cypress"/>

describe('Tabs Windows', () => {

  it('Tabs Windows', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get("#opentab")
      .then((el) => {
        const url = el.prop("href")

        cy.log(url);
        cy.visit(url);
        // cy.go("back");
      })

  });
});