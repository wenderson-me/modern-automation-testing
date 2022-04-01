///<reference types="cypress"/>

describe('Practice page', () => {

  it('Get and verify inputs', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    /**
     * Checkbox
    **/
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("#checkBoxOption1")
      .uncheck()
      .should("not.be.checked");

    cy.get("fieldset input[type='checkbox']").check(['option1', 'option3']);

    /**
    * Static dropdown
   **/

    cy.get("#dropdown-class-example")
      .select("option3")
      .should("have.value", "option3");

    /** 
     * Dynamic dropdown
     **/
    cy.get("input#autocomplete").type("Br")
    cy.get("li.ui-menu-item div").each(($el) => {
      if ($el.text() === "Brazil") {
        cy.wrap($el).click();
      }
    });
    cy.get("input#autocomplete").should("have.value", "Brazil");

    /**
     * Visible invisible
     */
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    /**
     * Radio button
     */
    cy.get("[value='radio2']")
      .check()
      .should("be.checked");
    cy.get("[value='radio1']").should("not.be.checked");
    cy.get("[value='radio3']").should("not.be.checked");

    /**
     * Alert button
     */
    cy.get("#alertbtn").click();
    cy.get("[value='Confirm']").click();
    //window:alert
    cy.on('window:alert', (str) => {
      //Mocha
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    });
    //window:confirm
    cy.on('window:confirm', (str) => {
      //Mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    });

    /**
     * Swith tab
     */
    cy.get("#opentab")
      .invoke("removeAttr", "target", "_blank")
      .click();

    cy.url()
      .should("include", "https://www.rahulshettyacademy.com/");

    cy.go("back");

    cy.url()
      .should("include", "AutomationPractice");
  });
});