///<reference types="cypress"/>
describe('Iframe', () => {
  it('Manupilating Iframe', () => {
    cy.visit(Cypress.env('url') + '/AutomationPractice/');
    cy.frameLoaded('#courses-iframe');
    cy.iframe().find('a[href="/mentorship"]').eq(0).click();
    cy.wait(500);
    cy.iframe().find('div h1.pricing-title').should('have.length', 2);
  })
})