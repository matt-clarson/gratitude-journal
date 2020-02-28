import { fixCypressSpec } from "../support/fix-spec";
import viewports from "../support/viewports";

describe("app info", function() {
  before(function() {
    cy.exec("docker-compose run --no-deps service-test-refresh-db");
  });

  beforeEach(fixCypressSpec(__filename));

  describe("mobile-viewports", function() {
    viewports.forEach(([preset, orientation]) =>
      it(`should match snapshot correctly for ${preset} ${orientation}`, function() {
        cy.viewport(preset, orientation);
        cy.visit("/log-in");
        cy.get('button[title="App Info"]').click();
        cy.document().toMatchImageSnapshot();
      })
    );
  });

  it("should be present on un-auth pages", function() {
    cy.visit("/log-in");

    cy.get('button[title="App Info"]').click();
    cy.document().toMatchImageSnapshot();
  });

  it("should be present on auth pages", function() {
    cy.fixture("users/existing-users.json")
      .then(([someUser]) => cy.beUser(someUser))
      .visit("/");
    cy.get('button[title="App Info"]').click();
    cy.document().toMatchImageSnapshot();
  });
});
