class productPage {

  checkOutButton() {
    return cy.get('div#navbarResponsive a');
  }
}
export default new productPage();