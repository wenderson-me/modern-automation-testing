/// <reference types="cypress"/>

import homePage from '../pageObjects/homePage'
import productPage from '../pageObjects/productPage'

describe('Framework', () => {
  beforeEach(function () {
    cy.fixture('example').then((data) => {
      this.data = data
    })
  })
  it('start test with building', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEditBox().type(this.data.name)
    homePage.getTwoDataBinding().should('have.value', this.data.name)
    homePage.getPassword().type(this.data.password, { log: false })
    homePage.getGender().select(this.data.gender)
    homePage.getEntrepreneaur().should('be.disabled')
    homePage.getShopTab().click()

    this.data.productName.forEach((element) => {
      cy.addProductCart(element)
    })

    productPage.checkOutButton().click();
    cy.contains("Checkout").click();
    cy.get('input#country').type(this.data.country);
    cy.get('.suggestions > ul > li > a').click();
    cy.get('#checkbox2').check({ force: true }).should('be.checked');
    cy.get('input[value="Purchase"]').click();
    //cy.get('div.alert-success').should('be.visible').should('contain', 'Success! Thank you!');
    cy.get('div.alert-success').then((text) => {
      const actualText = text.text()
      expect(actualText.includes('Success')).to.be.true
      cy.log('Test passed')
    })
  })

  it('Add product in checkout', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
  })
})
