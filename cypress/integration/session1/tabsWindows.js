/// <reference types="cypress"/>

describe('Tabs Windows', () => {
  it('Tabs Windows', () => {
    cy.visit(Cypress.env('url') + '/AutomationPractice/')

    cy.get('#opentab').then((el) => {
      const url = el.prop('href')

      cy.log(url)
      cy.visit(url)
      // cy.go("back");
    })
  })
})
