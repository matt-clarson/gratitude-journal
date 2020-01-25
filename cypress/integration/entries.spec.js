import { fixCypressSpec } from "../support/fix-spec";

describe("entries page", function() {
  before(function() {
    cy.exec("docker-compose run --no-deps service-test-refresh-db");
  });

  beforeEach(fixCypressSpec(__filename));

  describe("as anonymous user", function() {
    it("should redirect to welcome page", function() {
      cy.visit("/entries");
      cy.location("pathname").should("equal", "/welcome");
    });
  });

  describe("as existing user", function() {
    beforeEach(function() {
      cy.fixture("users/existing-users").then(([, someUser]) =>
        cy.beUser(someUser)
      );
      cy.visit("/entries");
    });

    it("should match snapshot", function() {
      cy.document().toMatchImageSnapshot();
    });
  });

  describe("as new user", function() {
    beforeEach(function() {
      cy.fixture("users/existing-users").then(([, , newUser]) =>
        cy.beUser(newUser)
      );
      cy.visit("/entries");
    });

    it("should match snapshot", function() {
      cy.document().toMatchImageSnapshot();
    });
  });
});
