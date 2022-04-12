/// <reference types="cypress"/>

describe('Add product to cart', () => {
  it('Add product', () => {
    cy.visit(Cypress.env('url') + '/seleniumPractise/#/')

    cy.get('.products').as('productLocator')

    cy.get('input.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('div.product:visible').should('have.length', 4)
    cy.get('@productLocator').find('.product').should('have.length', 4)
    cy.get('@productLocator')
      .find('.product')
      .eq(2)
      .contains('ADD TO CART')
      .click()

    console.log('test')

    cy.get('@productLocator')
      .find('.product')
      .each(($el) => {
        const textVeg = $el.find('h4.product-name').text()
        if (textVeg.includes('Cashews')) {
          cy.wrap($el).find('button').click()
        }
      })

    cy.get('.brand').should('have.text', 'GREENKART')

    const logo = cy.get('.brand').then((logoelement) => {
      cy.log(logoelement.text())
    })
  })
})
