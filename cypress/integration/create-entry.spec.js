import { fixCypressSpec } from "../support/fix-spec";

describe("create entry page", function() {
  before(function() {
    cy.exec("docker-compose run --no-deps service-test-refresh-db");
  });

  beforeEach(fixCypressSpec(__filename));

  describe("as anonymous user", function() {
    it("should redirect to welcome page", function() {
      cy.visit("/create");
      cy.location("pathname").should("equal", "/welcome");
    });
  });

  describe("as existing user", function() {
    beforeEach(function() {
      cy.fixture("users/existing-users").then(([, someUser]) =>
        cy.beUser(someUser)
      );
    });

    it("should match snapshot", function() {
      cy.visit("/create");
      cy.document().toMatchImageSnapshot();
    });

    it("should notify when form is submitted empty", function() {
      cy.visit("/create");
      cy.get("form")
        .contains("button", "Post")
        .click();
      cy.get("form")
        .contains("label", "Journal Entry")
        .invoke("attr", "id")
        .then(labelId => cy.get(`textarea[aria-labelledby="${labelId}"]`))
        .its("validity.valueMissing")
        .should("be", "true");
    });

    it("should create new entry and redirect to entries page", function() {
      const entryContent = "Some test entry contents";
      cy.visit("/entries");
      cy.get("table")
        .contains(entryContent)
        .should("not.exist");
      cy.get('a[title="Create Entry"]').click();

      cy.get("form")
        .contains("label", "Journal Entry")
        .invoke("attr", "id")
        .then(labelId => cy.get(`textarea[aria-labelledby="${labelId}"]`))
        .type(entryContent)
        .parents()
        .filter("form")
        .contains("button", "Post")
        .click();

      cy.location("pathname").should("equal", "/entries");
      cy.get("table").contains(entryContent);
    });
  });
});
