import { fixCypressSpec } from "../support/fix-spec";

describe("welcome page", function() {
  before(function() {
    cy.exec("docker-compose run --no-deps service-test-refresh-db");
  });

  beforeEach(fixCypressSpec(__filename));

  it("should match snapshot", function() {
    cy.visit("/welcome");
    cy.document().toMatchImageSnapshot();
  });

  describe("redirection", function() {
    const startPoints = [
      ["Home", "/"],
      ["Entries", "/entries"],
      ["Create Entry", "/create"]
    ];
    startPoints.forEach(([pageName, pagePath]) =>
      it(`should handle redirecting from and to ${pageName} page`, function() {
        cy.visit(pagePath);
        cy.location("pathname").should("equal", "/welcome");

        cy.contains("a", "Log in").click();

        cy.location("pathname").should("equal", "/log-in");
        cy.fixture("users/existing-users.json").then(([someUser]) =>
          cy.logIn(someUser)
        );
        cy.location("pathname").should("equal", pagePath);
      })
    );
  });
});
