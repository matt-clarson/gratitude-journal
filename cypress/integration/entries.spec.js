import { fixCypressSpec } from "../support/fix-spec";
import viewports from "../support/viewports";

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

    describe("mobile-viewports", function() {
      viewports.forEach(([preset, orientation]) =>
        it(`should match snapshot correctly for ${preset} ${orientation}`, function() {
          cy.viewport(preset, orientation);
          cy.visit("/entries");
          cy.document().toMatchImageSnapshot();
        })
      );
    });

    it("should match snapshot", function() {
      cy.contains("Entries").trigger("mouseover");
      cy.document().toMatchImageSnapshot();
    });

    it("should delete entry when delete button clicked", function() {
      cy.get("ul > li")
        .first()
        .invoke("text")
        .as("entryContent");

      cy.get('button[title="Delete Entry"]')
        .first()
        .click()
        .then(function() {
          cy.contains("li", this.entryContent).should("not.exist");
        });
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
      cy.contains("Entries").trigger("mouseover");
      cy.document().toMatchImageSnapshot();
    });
  });
});
