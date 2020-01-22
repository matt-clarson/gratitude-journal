describe("Sign Up Functionality", function() {
  describe("as a new user", function() {
    before(function() {
      cy.exec("docker-compose run --no-deps service-test-refresh-db");
    });

    it("should redirect to the home page on successful login", function() {
      cy.visit("/welcome");

      cy.contains("Sign Up").click();

      cy.fixture("users/new-user.json").then(cy.signUp);

      cy.location("pathname").should("equal", "/");

      cy.contains("You haven't added anything to your journal yet");
    });

    it("should display error if passwords do not match", function() {
      cy.visit("/welcome");

      cy.contains("Sign Up").click();

      cy.fixture("users/new-user.json").then(newUser =>
        cy.signUp({ ...newUser, repeatPassword: newUser + "typo" })
      );

      cy.location("pathname").should("equal", "/sign-up");
      cy.get("form").contains("Passwords do not match");
    });
  });
});
