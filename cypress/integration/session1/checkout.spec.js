/// <reference types="cypress"/>

import homePage from '../../support/pageObjects/homePage'
import productPage from '../../support/pageObjects/productPage'

describe('Checkout', () => {
  beforeEach(function () {
    cy.fixture('example').then((data) => {
      this.data = data
    });
  });

  it('Fill form and checkout', function () {
    cy.visit(Cypress.env('url') + '/angularpractice/');

    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEditBox().type(this.data.name);
    homePage.getTwoDataBinding().should('have.value', this.data.name);
    homePage.getPassword().type(this.data.password, { log: false });
    homePage.getGender().select(this.data.gender);
    homePage.getEntrepreneaur().should('be.disabled');
    homePage.getShopTab().click();

    this.data.productName.forEach((element) => {
      cy.addProductCart(element);
    });

    productPage.checkOutButton().click();

    var sum = 0;

    cy.get('tr td:nth-child(4) strong').each(($el) => {
      const amount = $el.text();
      var res = amount.split(" ");
      res = res[1].trim();
      sum = sum + parseInt(res);
    }).then(() => {
      cy.get('tr td:nth-child(5) strong').should('have.text', `₹. ${sum}`);  //sum is the total amount
    })

    cy.contains("Checkout").click();

    cy.get('input#country').type(this.data.country);

    cy.get('.suggestions > ul > li > a').click();

    cy.get('#checkbox2').check({ force: true }).should('be.checked');

    cy.get('input[value="Purchase"]').click();

    //cy.get('div.alert-success').should('be.visible').should('contain', 'Success! Thank you!');
    cy.get('div.alert-success').then((text) => {
      const actualText = text.text();
      expect(actualText.includes('Success')).to.be.true
      cy.log('Test passed');
    });
  });
});
