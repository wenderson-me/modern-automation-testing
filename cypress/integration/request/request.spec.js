/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Request API', () => {

  it('Post book', () => {

    var id = null;
    const name = faker.random.word();
    const isbn = faker.datatype.string(3)
    const aisle = faker.datatype.number()
    const author = faker.name.findName();

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
    });
  });
});