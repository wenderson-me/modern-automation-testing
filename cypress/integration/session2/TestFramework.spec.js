/// <reference types="cypress"/>

import homePage from '../pageObjects/homePage'

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
  })

  it('Add product in checkout', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
  })
})
