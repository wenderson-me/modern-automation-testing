/// <reference types="cypress"/>

describe('Iframe', () => {
  it('Manupilating Iframe', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.frameLoaded('#courses-iframe')

    cy.iframe().find("a[href='#/mentorship']").eq(0).click()

    cy.iframe().find('h1.pricing-title').should('have.length', 2)
  })
})
