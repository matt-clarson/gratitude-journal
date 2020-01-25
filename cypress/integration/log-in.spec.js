import { fixCypressSpec } from "../support/fix-spec";
import users from "../fixtures/users/existing-users.json";

describe("log in page", function() {
  beforeEach(fixCypressSpec(__filename));
  beforeEach(function() {
    cy.visit("/log-in");
  });

  users.forEach(user =>
    describe(`as existing user ${user.username}`, function() {
      it("should redirect to home page", function() {
        cy.logIn(user);

        cy.location("pathname").should("equal", "/");
      });

      it("should present credential error if password is wrong", function() {
        cy.logIn({ ...user, password: user.password + "typo" });

        cy.location("pathname").should("equal", "/log-in");
        cy.get("form").contains("Please, enter valid credentials");
      });
    })
  );

  describe("as a non-existant user", function() {
    before(function() {
      cy.exec("docker-compose run --no-deps service-test-refresh-db");
    });

    it("should present credential error", function() {
      cy.fixture("users/new-user.json").then(cy.logIn);

      cy.location("pathname").should("equal", "/log-in");
      cy.get("form").contains("Please, enter valid credentials");
    });
  });
});
