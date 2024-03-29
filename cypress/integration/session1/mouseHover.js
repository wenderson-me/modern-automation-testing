/// <reference types="cypress"/>

describe('Mouse Hover', () => {
  /**
   * Mouse hover
   */
  it('Click in button hover', () => {
    cy.visit(Cypress.env('url') + '/AutomationPractice/')

    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')
  })
})
