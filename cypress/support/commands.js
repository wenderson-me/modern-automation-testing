
Cypress.Commands.add('addProductCart', (product) => {
  cy.get('h4.card-title').each(($e1, index) => {
    if ($e1.text().includes(product)) {
      cy.get('button.btn-info').eq(index).click()
    }
  })
});

Cypress.Commands.add('loginAPI', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'https://rahulshettyacademy.com/api/ecom/auth/login',
    body: {
      userEmail: email, userPassword: password
    },
  }).then((response) => {
    const token = response.body.token
    expect(response.status).to.eq(200);
    window.localStorage.setItem('token', token)
  });
});