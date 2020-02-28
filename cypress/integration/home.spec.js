import { fixCypressSpec } from "../support/fix-spec";
import viewports from "../support/viewports";

describe("home page", function() {
  before(function() {
    cy.exec("docker-compose run --no-deps service-test-refresh-db");
  });

  beforeEach(fixCypressSpec(__filename));

  describe("as anonymous user", function() {
    it("should redirect to welcome page", function() {
      cy.visit("/");
      cy.location("pathname").should("equal", "/welcome");
    });
  });

  describe("as existing user", function() {
    beforeEach(function() {
      cy.fixture("users/existing-users.json").then(([someUser]) =>
        cy.beUser(someUser)
      );
      cy.visit("/");
    });

    describe("mobile-viewports", function() {
      viewports.forEach(([preset, orientation]) =>
        it(`should match snapshot correctly for ${preset} ${orientation}`, function() {
          cy.viewport(preset, orientation);
          cy.visit("/");
          cy.document().toMatchImageSnapshot();
        })
      );
    });

    it("should match snapshot", function() {
      cy.document().toMatchImageSnapshot();
    });
  });

  describe("as new user", function() {
    beforeEach(function() {
      cy.fixture("users/existing-users.json").then(([, , newUser]) =>
        cy.beUser(newUser)
      );
      cy.visit("/");
    });

    it("should match snapshot", function() {
      cy.document().toMatchImageSnapshot();
    });
  });
});
