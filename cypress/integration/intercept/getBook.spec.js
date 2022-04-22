/// <reference types="cypress"/>

describe('Intercept', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url') + '/angularAppdemo/');
  });

  it('Get book', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    },
      {
        statusCode: 200,
        body:
          [{
            book_name: "Clean Code",
            isbn: "CC",
            aisle: "2301"
          }]
      }).as('getBooks');

    cy.get('button[routerlink="/library"]').click();

    cy.wait('@getBooks').should(({ response }) => {
      cy.get('tr').should('have.length', response.body.length + 1);
    });

    cy.get('p').should('have.text', 'Oops only 1 Book available');
  });

  it('Status code validation', () => {
    cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
      req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
      req.continue((response) => {
        // expect(response.statusCode).to.equal(403);
      });
    }).as('dummyUrl');

    cy.get('button[routerlink="/library"]').click();

    cy.wait('@dummyUrl');
  });
});