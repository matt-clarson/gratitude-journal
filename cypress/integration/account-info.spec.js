import { fixCypressSpec } from "../support/fix-spec";
import viewports from "../support/viewports";

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

  describe("mobile-viewports", function() {
    viewports.forEach(([preset, orientation]) =>
      it(`should match snapshot correctly for ${preset} ${orientation}`, function() {
        cy.viewport(preset, orientation);
        cy.visit("/");
        cy.get('button[title="Account Info"]').click();
        cy.document().toMatchImageSnapshot();
      })
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

  describe("delete account", function() {
    beforeEach(function() {
      cy.visit("/");
      cy.get('button[title="Account Info"]').click();
      cy.contains("button", "Delete Account").click();
    });

    it("should match snapshot", function() {
      cy.document().toMatchImageSnapshot();
    });

    it("should error if user enters incorrect password", function() {
      cy.deleteAccount({ password: "wrong password" });
      cy.get("dialog").contains("Please enter correct password");
    });

    it("should be cancelable", function() {
      cy.contains("button", "Cancel").click();
      cy.get("dialog")
        .get("form")
        .should("not.exist");
    });

    it("should delete user account", function() {
      cy.fixture("users/existing-users.json").then(([someUser]) =>
        cy.deleteAccount(someUser)
      );
      cy.location("pathname").should("equal", "/welcome");
      cy.visit("/log-in");
      cy.fixture("users/existing-users.json").then(([someUser]) =>
        cy.logIn(someUser)
      );
      cy.get("form").contains("Please, enter valid credentials");
    });
  });
});
