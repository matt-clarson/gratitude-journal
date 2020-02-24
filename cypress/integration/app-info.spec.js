import { fixCypressSpec } from "../support/fix-spec";

describe("app info", function() {
  before(function() {
    cy.exec("docker-compose run --no-deps service-test-refresh-db");
  });

  beforeEach(fixCypressSpec(__filename));

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
