import { fixCypressSpec } from "../support/fix-spec";
import viewports from "../support/viewports";

describe("Sign Up Functionality", function() {
  before(function() {
    cy.exec("docker-compose run --no-deps service-test-refresh-db");
  });

  beforeEach(fixCypressSpec(__filename));

  describe("mobile-viewports", function() {
    viewports.forEach(([preset, orientation]) =>
      it(`should match snapshot correctly for ${preset} ${orientation}`, function() {
        cy.viewport(preset, orientation);
        cy.visit("/sign-up");
        cy.document().toMatchImageSnapshot();
      })
    );
  });

  it("should match snapshot", function() {
    cy.visit("/sign-up").then(() => cy.document().toMatchImageSnapshot());
  });

  describe("as a new user", function() {
    it("should redirect to the home page on successful login", function() {
      cy.visit("/sign-up");

      cy.fixture("users/new-user.json").then(cy.signUp);

      cy.location("pathname").should("equal", "/");

      cy.contains("You haven't added anything to your journal yet");
    });

    it("should display error if passwords do not match", function() {
      cy.visit("/sign-up");

      cy.fixture("users/new-user.json").then(newUser =>
        cy.signUp({ ...newUser, repeatPassword: newUser + "typo" })
      );

      cy.location("pathname").should("equal", "/sign-up");
      cy.get("form").contains("Passwords do not match");
    });
  });

  describe("as an existing user", function() {
    it("should prevent sign-up with error message", function() {
      cy.visit("/sign-up");

      cy.fixture("users/existing-users.json").then(([someUser]) =>
        cy.signUp(someUser)
      );

      cy.location("pathname").should("equal", "/sign-up");
      cy.get("form").contains(
        /Username ".*" already exists - try using a different one/
      );
    });
  });
});
