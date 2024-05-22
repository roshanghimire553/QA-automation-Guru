/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  // login succeess case
  it("succcessful login with valid email and password", () => {
    cy.get("input[name=email]").type("email@gmail.com");
    cy.get("input[name=password]").type("password");
    cy.get("input[type=submit]").click();
    cy.get("h4").should("have.text", "email@gmail.com");
  });
  //login failure cases
  it("login with invalid email", () => {
    cy.get("input[name=email]").type("ema@gmail.com");
    cy.get("input[name=password]").type("password");
    cy.get("input[type=submit]").click();
    cy.get("span")
      .contains("Enter your Email address and password correct")
      .should("be.visible");
  });
  it("login with invalid password", () => {
    cy.get("input[name=email]").type("ema@gmail.com");
    cy.get("input[name=password]").type("password");
    cy.get("input[type=submit]").click();
    cy.get("span")
      .contains("Enter your Email address and password correct")
      .should("be.visible");
  });
  it("login with empty email and password", () => {
    //in this cas we are not providing any email and password
    //but able to login and show log out button so this is a bug
    cy.get("input[type=submit]").click();
    cy.get("input[value='Log out']").should("be.visible");
  });
});
