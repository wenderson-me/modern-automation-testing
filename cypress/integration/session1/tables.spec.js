///<reference types="cypress"/>

describe('Get content in tables', () => {

  it('Get Title and Number in table', () => {
    /**
     * Hadling tables using each command
     */
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get("tr td:nth-child(2)").each(($e1, index) => {
      const text = $e1.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)").eq(index).next().then((price) => {
          expect(price.text(), "Preço").to.equal("25")
        })
      }
    })
  });
});