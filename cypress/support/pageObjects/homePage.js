class homePage {
  getEditBox() {
    return cy.get("form input[name='name']")
  }

  getTwoDataBinding() {
    return cy.get("h4 input[name='name']")
  }

  getGender() {
    return cy.get('div select')
  }

  getPassword() {
    return cy.get("div input[type='password']")
  }

  getEntrepreneaur() {
    return cy.get('#inlineRadio3')
  }

  getShopTab() {
    return cy.get('a.nav-link:last')
  }
}

export default new homePage()
