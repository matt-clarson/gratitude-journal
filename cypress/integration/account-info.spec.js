import { fixCypressSpec } from "../support/fix-spec";

describe("account info", function() {
  before(function() {
    cy.exec("docker-compose run --no-deps service-test-refresh-db");
  });

  beforeEach(fixCypressSpec(__filename));
  beforeEach(function() {
    cy.fixture("users/existing-users.json").then(([someUser]) =>
      cy.beUser(someUser)
    );
  });

  describe("access", function() {
    const accessiblePages = [
      ["/", "home"],
      ["/create", "create entry"],
      ["/entries", "entries"]
    ];

    accessiblePages.forEach(([pathname, pageName]) =>
      it(`should be accessible from the ${pageName} page`, function() {
        cy.visit(pathname);

        cy.get('button[title="Account Info"]').click();
        cy.document().toMatchImageSnapshot();
      })
    );

    const inaccessiblePages = [
      ["/welcome", "welcome"],
      ["/log-in", "login"],
      ["/sign-up", "sign up"]
    ];
    inaccessiblePages.forEach(([pathname, pageName]) =>
      it(`should be inaccessible from the ${pageName} page`, function() {
        cy.visit(pathname);

        cy.get('button[title="Account Info"]').should("not.exist");
      })
    );
  });

  describe("log out", function() {
    it("should log user out", function() {
      cy.visit("/");
      cy.get('button[title="Account Info"]').click();
      cy.contains("button", "Logout").click();

      cy.location("pathname").should("equal", "/welcome");
      cy.visit("/");
      cy.location("pathname").should("equal", "/welcome");
      cy.visit("/create");
      cy.location("pathname").should("equal", "/welcome");
      cy.visit("/entries");
      cy.location("pathname").should("equal", "/welcome");
    });
  });
});
