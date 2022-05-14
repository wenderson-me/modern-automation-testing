/// <reference types="cypress"/>

describe('JWT Session', () => {
  before(() => {
    cy.loginAPI("nanciee@gmail.com", "Kx7@MdFZR3226V5");
  });

  it('Is logged in through local storage', () => {
    cy.visit("https://rahulshettyacademy.com/client/");
  });
});