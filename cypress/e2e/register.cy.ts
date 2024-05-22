describe("Register", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("should register a new user", () => {
    cy.get("a").contains("Register").click();
    cy.get("#user_title").select("Doctor");
    cy.get("#user_firstname").type("Roshan");
    cy.get("#user_surname").type("Ghimire");
    cy.get("#user_phone").type("1234567890");
    cy.get("select[name='year']").select("1990");
    cy.get("select[name='month']").select("May");
    cy.get("select[name='date']").select("20");
    cy.get("input[value='Provisional']").check();
    cy.get("select[name='licenceperiod']").type("5");
    cy.get("#user_occupation_id").select("Doctor");
    cy.get("input[name='street']").type("Sinamnagal");
    cy.get("input[name='city']").type("kathmandu");
    cy.get("input[name='county']").type("Nepal");
    cy.get("input[name='post_code']").type("44600");
    cy.get("input[name='email']").type("email@gmail.com");
    cy.get("input[name='password']").type("password");
    cy.get("input[name='c_password']").type("password");
    //for reseting the form

    // cy.get("input[value='Reset']").click();

    //for creating new users
    cy.get("input[value='Create']").click();
    //using assertion after registering
    cy.get("h3").should("have.text", "Login");
  });
});
