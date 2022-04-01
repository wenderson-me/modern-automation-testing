///<reference types="cypress"/>

describe('my second test suite', () => {

  it('my second test case', () => {
    cy.visit('/');
    cy.get('input.search-keyword').type('ca');
    cy.wait(2000)
    cy.get('.products').find('.product').each(($el) => {
      const textVeg = $el.find('h4.product-name').text()
      if (textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click()
      }
    });
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click()
  });
});