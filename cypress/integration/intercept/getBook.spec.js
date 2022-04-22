/// <reference types="cypress"/>

describe('API', () => {

  it('Get book', () => {
    cy.visit(Cypress.env('url') + '/angularAppdemo/');

    cy.intercept({
      method: 'GET',
      url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    },
      {
        statusCode: 200,
        body:
          [{
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301"
          }]
      }).as('getBooks');

    cy.get('button[routerlink="/library"]').click();
    cy.wait('@getBooks');
    cy.get('p').should('have.text', 'Oops only 1 Book available');
  })
});