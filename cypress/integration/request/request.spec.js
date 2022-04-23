/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Request API', () => {

  var id = null;
  const name = faker.random.word();
  const isbn = faker.datatype.string(3);
  const aisle = faker.datatype.number();
  const author = faker.name.findName();

  it('Post book', () => {
    cy.request({
      method: 'POST',
      url: 'http://216.10.245.166/Library/Addbook.php',
      body: {
        "name": name,
        "isbn": isbn,
        "aisle": aisle,
        "author": author
      }
    }).then((response) => {
      id = response.body.ID;
      expect(response.status).to.eq(200);
      expect(response.body.Msg, "Success").to.be.equal('successfully added');
      expect(response.body.ID, "ID").to.be.equal(id);
    })
  });

  it('Get book', () => {
    cy.request({
      method: 'GET',
      url: `http://216.10.245.166/Library/GetBook.php?ID=${id}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].book_name, "Book Name").to.be.equal(name);
      expect(response.body[0].isbn, "isbn").to.be.eq(isbn);
      expect(response.body[0].aisle, "aisle").to.include(aisle);
      expect(response.body[0].author, "author").to.be.equal(author);
    });
  });

  it('Get author', () => {

    cy.request({
      method: 'GET',
      url: `http://216.10.245.166/Library/GetBook.php?AuthorName=${author}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].book_name, "Book Name").to.be.equal(name);
      expect(response.body[0].isbn, "isbn").to.be.eq(isbn);
      expect(response.body[0].aisle, "aisle").to.include(aisle);
    });
  });

  it('Delete book', () => {
    cy.request({
      method: 'DELETE',
      url: 'http://216.10.245.166/Library/DeleteBook.php',
      body: {
        "ID": id
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.msg, "Success").to.be.equal('book is successfully deleted');
    });
  });
});